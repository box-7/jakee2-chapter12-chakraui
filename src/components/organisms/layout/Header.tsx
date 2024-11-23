
import { memo, useState, useCallback } from 'react';
import { Flex, Heading, Link, Box, IconButton, Button } from '@chakra-ui/react';
// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
import { MenuIconButton } from "@/components/atoms/button/MenuIconButton.tsx";
import { useNavigate } from 'react-router-dom';

import {
        DrawerBackdrop,
        DrawerBody,
        DrawerCloseTrigger,
        DrawerContent,
        DrawerRoot,
        DrawerTitle,
        DrawerTrigger,
} from "@/components/ui/drawer"

export const Header: React.FC = memo(() => {
        const [open, setOpen] = useState(false)
        const navigate = useNavigate();
        const onClickHome = useCallback(() => navigate("/home"), []);
        const onClickUserManagement = useCallback(() => navigate("/user_management"), []);
        const onClickSetting = useCallback(() => navigate("/setting"), []);

        return (
                <>
                        <Flex
                                as="nav"
                                bg="teal.500"
                                color="gray.50"
                                align="center" // 水平方向の中央寄せ
                                justify="space-between" // 垂直方向のスペースを均等に配置
                                // 画面サイズに応じて要素の内側の余白（padding）の値を動的に変える 
                                // base:スマホ  md:タブレット以上
                                padding={{ base: 3, md: 5 }}
                        >
                                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome} > {/* mrはmargin-right */}
                                        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                                                ユーザー管理アプリ
                                        </Heading>
                                </Flex>
                                <Flex
                                        align="center"
                                        fontSize="sm"
                                        flexGrow={2}
                                        display={{ base: "none", md: "flex" }} // base:スマホ  md:タブレット以上
                                >
                                        <Box pr={4}> {/* prはpadding-right */}
                                                <Link onClick={onClickUserManagement} >ユーザー一覧</Link>
                                        </Box>
                                        <Link onClick={onClickSetting}>設定</Link>
                                </Flex>
                                <DrawerRoot placement={"start"} open={open} onOpenChange={(e) => setOpen(e.open)}>
                                        <DrawerBackdrop />
                                        <DrawerTrigger asChild>
                                                <MenuIconButton />
                                        </DrawerTrigger>
                                        <DrawerContent>
                                                <DrawerBody p={0} bg="gray.100">
                                                        <Button w="100%" variant="outline" onClick={onClickHome} >Top</Button>
                                                        <Button w="100%" variant="outline" onClick={onClickUserManagement}>ユーザー一覧</Button>
                                                        <Button w="100%" variant="outline" onClick={onClickSetting}>設定</Button>
                                                </DrawerBody>
                                                <DrawerCloseTrigger />
                                        </DrawerContent>
                                </DrawerRoot>
                        </Flex>
                </>

        )
});

// Icon Button
// https://www.chakra-ui.com/docs/components/icon-button




// import {
//         DrawerActionTrigger,
//         DrawerBackdrop,
//         DrawerBody,
//         DrawerCloseTrigger,
//         DrawerContent,
//         DrawerFooter,
//         DrawerHeader,
//         DrawerRoot,
//         DrawerTitle,
//         DrawerTrigger,
// } from "@/components/ui/drawer"

// export const Header: React.FC = memo(() => {
//         const [open, setOpen] = useState(false)
//         return (
//                 <>
//                         <DrawerRoot placement={"start"} open={open} onOpenChange={(e) => setOpen(e.open)}>
//                                 {/* <DrawerBackdrop /> */}
//                                 {/* 移動 <DrawerTrigger asChild> */}
//                                         <MenuIconButton />
//                                 {/* 移動 </DrawerTrigger> */}
//                                 <DrawerContent>
//                                         <DrawerHeader>
//                                                 <DrawerTitle>Drawer Title</DrawerTitle>
//                                         </DrawerHeader>
//                                         <DrawerBody p={0} bg="gray.100">
//                                                 <Button w="100%" variant="outline">Top</Button>
//                                                 <Button w="100%" variant="outline">ユーザー一覧</Button>
//                                                 <Button w="100%" variant="outline">設定</Button>
//                                         </DrawerBody>
//                                         <DrawerCloseTrigger />
//                                 </DrawerContent>
//                         </DrawerRoot>
//         </>

//         )
// });

