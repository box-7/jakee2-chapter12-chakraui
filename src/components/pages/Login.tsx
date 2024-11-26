import { ChangeEvent, memo, useState } from 'react';
import { Box, Flex, Heading, Input, Stack, Separator } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';
import { Toaster, toaster } from "@/components/ui/toaster"

export const Login: React.FC = memo(() => {
        const { login, loading  } = useAuth();
        const[userId, setUsrId] = useState("");
        const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUsrId(e.target.value);
        const onClickLogin = () => login(userId);

        return (
                <Flex align="center" justify="center" height="100vh">
                        <Box bg="white"  w="sm" p={4} borderRadius="md" shadow="md" >
                                <Heading  as="h1" size="lg"textAlign="center" marginBottom="2">ユーザー管理アプリ</Heading>
                                <Separator variant="solid"   />
                                <Stack py={4} px={10} gap="6"> {/* spacingが効かないのでgapで対応 marginY=""も使える */}
                                        <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}  />
                                        {/* <Toaster /> */}
                                        <PrimaryButton
                                                disabled={userId === ""}
                                                loading={loading}
                                                onClick={() => {
                                                        onClickLogin(); // ()をつけなければ、アラートが表示される
                                                }}
                                        >
                                                        ログイン
                                        </PrimaryButton>
                                </Stack>
                        </Box>
                </Flex>
        )
});

// Stackのドキュメント
// https://www.chakra-ui.com/docs/components/stack

// コンポーネントを定義するやり方もある
// const Divider = () => (
//         <Box as="hr" border="1px solid" borderColor="gray.200" my="4" />
// );



