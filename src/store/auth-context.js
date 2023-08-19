import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration; 
}; 

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storeExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storeExpirationDate);

    if(remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    } 

    return {
        token: storedToken,
        duration: remainingTime
    };
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData) {
        initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const LogoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const LoginHandler = (token, expirationTime) => {
        console.log(token.token, "asdfsdf")
        if(!token) return;
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(LogoutHandler, remainingTime);
    };

    useEffect(() => {
        if(tokenData){
            console.log(tokenData.duration);
            logoutTimer = setTimeout(LogoutHandler, tokenData.duration);
        }
    }, [tokenData, LogoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: LoginHandler,
        logout: LogoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};


export default AuthContext;