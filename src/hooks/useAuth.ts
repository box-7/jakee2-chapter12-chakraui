import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";

export const useAuth = () => {
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);

        const login = useCallback((id: string) => {
                setLoading(true);
                axios
                        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                        .then((res) => {
                                if (res.data) {
                                        toaster.create({
                                                description: "ログインしました",
                                                type: "success",
                                        });
                                        navigate("/home");
                                } else {
                                        toaster.create({
                                                description: "ユーザーが見つかりませんでした",
                                                type: "error",
                                        });
                                }
                        })
                        .catch(() => {
                                toaster.create({
                                        description: "ログインに失敗しました",
                                        type: "error",
                                });
                        })
                        .finally(() => setLoading(false));
        }, [navigate]);
        return { login, loading,};
};

