export interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
}

export interface IUser {
    access_token: string;
    user: {
        _id: string;
        role: string;
        email: string;
        name: string
    }
}

export interface ICompany {
    _id?: string;
    name?: string;
    address?: string;
    description?: string
}

export interface IUserRegister {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    address: string;
}