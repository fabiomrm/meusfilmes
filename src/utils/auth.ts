import jwtDecode from "jwt-decode";
import { TokenData } from "types";
import { getAuthData } from "./storage";


export const getTokenData = (): TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    } catch (e) {
        return undefined;
    }
};

export const isAuthenticated = (): boolean => {
    const tokenData = getTokenData();

    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}


