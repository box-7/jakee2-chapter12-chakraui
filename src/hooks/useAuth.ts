import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user.ts";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
// import { Show } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster"
export const useAuth = () => {
        // const { showToast } = props;
        const navigate = useNavigate();
        const { showMessage } = useMessage();
        const [loading, setLoading] = useState(false);
        // 関数定義そのものをキャッシュする
        const login = useCallback((id: string) => {
                setLoading(true);
                axios
                        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                        .then((res) => {
                                if (res.data) {
                                        showMessage({ title: "ログインしました", status: "success" });
                                        // toaster.create({
                                        //         description: "File saved successfully111",
                                        //         type: "loading",
                                        // })
                                        navigate("/home");
                                } else {
                                        alert("ユーザーが見つかりません");
                                }
                        })
                        .catch(() => alert("ログインできません"))
                        .finally(() => setLoading(false));
        },
                // もし依存配列に navigate を含めなければ、古い navigate 関数が保持される可能性があり、予期しない動作を引き起こすことがある
                [useNavigate]
        );
        return {
                login,
                loading
        };
}