import axios from 'axios';
import { useState } from 'react';
import { User } from '../types/api/user';
import { toaster } from "@/components/ui/toaster";
import { useCallback } from 'react';

export const useAllUsers = () => {
        const [loading, setLoading] = useState<boolean>(false);
        const [users, setUsers] = useState<Array<User>>([]);

        const getUsers = useCallback(() => {
                setLoading(true);
                axios
                .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
                .then((res) => setUsers(res.data))
                .catch(() => {
                        toaster.create({
                                description: "ユーザー取得に失敗しました",
                                type: "error",
                        });
                })
                .finally(() => {
                        setLoading(false);
                })
        }, []);
        return { getUsers, loading, users };
}