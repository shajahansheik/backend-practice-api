/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa'

@Injectable()
export class JwtcreateService {

    jwksClient: jwksClient.JwksClient

    constructor() {
        this.jwksClient = jwksClient({
            jwksUri: 'http://localhost:3002/.wellknown/json'
        })
    }

    async generateToken(result: any) {
        const load = {
            mail: result?.mail,
            fullName: result?.firstName + " " + result?.lastName,
            phoneNumber: result?.phoneNumber
        }
        // console.log(process.env.PRIVATE_KEY)
        console.log(load)
        // const privateKey ="-----BEGIN PRIVATE KEY-----\nMIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEAiKefwbTTaQWFuOlG\nhWqxLQsmMlWADV0/70AcPqyyLGBjgq3RyVqnAtIoo3pTFMoRpOd9PpK099hubFxw\nn6vOhwIDAQABAkBEzlGsEMYZrQQllJ9DcfL/wQtccJxnHjqg1mDiVcXofWuDLF0X\nyr7bwrgp5KGeplVjm0PCVobOG97ptb/8IOtRAiEAu1KR3udc0fXFm8v9IzFSD4e5\ndB1GJyTrpZTmXANSB30CIQC6wY7X5iqnNmcWT0BmF4KXBbrdWMRQWCAWnI6ZKmi1\nUwIgNSqtXk/ah3kzWhHeyiNQgDnsiCla5PdUrs2BSHJk0N0CIDxtJl/a/FAQPTit\nueOOldVxqC24bASnDvLiAw2x+CE7AiB53cO2eFBF0G892pwm0425/h/xnbp4jZi2\nKxZ0jAHK9w==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n');
        return await jwt.sign(load, process.env.PRIVATE_KEY, { algorithm: 'RS256', expiresIn: 86400, keyid: "zRTfv_gyGCQieCTWvZIpRrBRfj65NfB8DsXvi7WNyK8" });
    }

    getPublickey(kid): Promise<string> {
        return new Promise((resolve, reject) => {
            this.jwksClient.getSigningKey(kid, (err, key) => {
                if (err) return reject(err)
                const publicKey = key['publicKey'] || key['rsaPublicKey'];
                console.log({ publicKey })
                resolve(publicKey)
            })
        })
    }

    async verifyToken(token: string) {
        const { header }: any = jwt.decode(token, { complete: true });
        // console.log({header})
        // console.log({ kid: header.kid })
        const isValid = jwt.verify(token, await this.getPublickey(header.kid));
        // console.log({ isValid })
        return isValid;
    }
}
