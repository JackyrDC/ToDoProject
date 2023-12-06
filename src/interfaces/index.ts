interface IUser{
    userId : string,
    name : string,
    email? : string,
    password : string,
    fechaAgg? : Date,
}

type User= IUser[];

export type {
    User
}