export type loginUserType = {
    email: string,
    password: string,
}

export type registerUserType = loginUserType & {
    username: string,
}