import { useContext } from 'react';

import {
        LoginUserContext,
        LoginUserContextType
} from '../providers/LoginUserProvider';

export const useLoginUser = (): LoginUserContextType => {
        const { loginUser, setLoginUser } = useContext(LoginUserContext);
        return { loginUser, setLoginUser };
}