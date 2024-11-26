import axios from 'axios';
import { useState } from 'react';
import { User } from '../types/api/user';
import { toaster } from "@/components/ui/toaster";
import { useCallback } from 'react';
// import { Toast } from './useMessage';
import { useToast } from './useMessage';

export const useAllUsers = () => {
        const [loading, setLoading] = useState<boolean>(false);
        const [users, setUsers] = useState<Array<User>>([]);
        const { Toast } = useToast();

        const getUsers = useCallback(() => {
                setLoading(true);
                axios
                .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
                .then((res) => setUsers(res.data))
                .catch(() => {
                        Toast("ユーザー取得に失敗しました", "error")
                        // toaster.create({
                        //         description: "ログインしました",
                        //         type: "success",
                        // });
                })
                .finally(() => {
                        setLoading(false);
                })
        }, []);
        return { getUsers, loading, users };
}



                        // Toast
                        // toaster.create({
                        //         description: "ユーザー取得に失敗しました",
                        //         type: "error",
                        // });