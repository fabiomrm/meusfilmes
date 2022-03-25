export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export type User = {
    id: number;
    name: string;
    email: string;
}

export type MovieType = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}

export type ReviewType = {
    id: number;
    text: number;
    movieId: number;
    user: User;
}

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userId: number;
}
