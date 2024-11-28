import { createContext, Dispatch,SetStateAction } from 'react';

import { User } from '../types/api/user';
import { useState } from 'react';

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
        loginUser: LoginUser | null;
        setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);


export const LoginUserProvider = (props: {children: React.ReactNode}) => {
        const { children } = props;
        const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
        // console.log("loginUser", loginUser);

        return (
                <LoginUserContext.Provider value={{ loginUser, setLoginUser}} >
                        {children}
                </LoginUserContext.Provider>
        )
}