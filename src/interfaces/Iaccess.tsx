export interface Iaccess {
    config: object;
    data: {
        username: string;
        session: string;
        type: string;
        access_token: string;
        code: string;
        refresh_token: string;
    };
    headers: object;
    request: object;
}

export interface IaccessData {
    username: string;
    session: string;
    type: string;
    access_token: string;
    code: string;
    refresh_token: string;
}
