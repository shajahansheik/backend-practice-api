export declare class DATA {
    uuid: string;
    firstName: string;
    lastName: string;
    password: string;
    empDetails: EMPLOYEEDETAILS[];
    location: LOCATION;
    mobile: number;
    family: FAMILYDETAILS;
    education: EDUCATION;
    aadhar: number;
    pan: string;
}
export declare class EMPLOYEEDETAILS {
    empId: string;
    salary: number;
    address: LOCATION;
}
export declare class LOCATION {
    houseNo: any;
    street: string;
    village: string;
    mandal: string;
    district: string;
    state: string;
    constitution: string;
    country: string;
    pincode: string;
}
export declare class FAMILYDETAILS {
    father: string;
    mother: string;
    sister: string;
    brother: string;
    wife: string;
    children: string;
}
export declare class EDUCATION {
    name: string;
    college: string;
    college_address: LOCATION;
}
