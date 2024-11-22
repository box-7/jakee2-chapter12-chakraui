
import { memo } from 'react';
import { Flex, Heading, Link, Box, IconButton, Button } from '@chakra-ui/react';
// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
import { FaBars } from "react-icons/fa6";

import {
        DrawerActionTrigger,
        DrawerBackdrop,
        DrawerBody,
        DrawerCloseTrigger,
        DrawerContent,
        DrawerFooter,
        DrawerHeader,
        DrawerRoot,
        DrawerTitle,
        DrawerTrigger,
} from "@/components/ui/drawer"

export const Header: React.FC = memo(() => {
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
                                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}> {/* mrはmargin-right */}
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
                                                <Link>ユーザー一覧</Link>
                                        </Box>
                                        <Link>設定</Link>
                                </Flex>
                                <DrawerRoot placement={"start"} >
                                        <DrawerBackdrop />
                                        <DrawerTrigger asChild>
                                                <IconButton
                                                        align="right"
                                                        aria-label="メニューボタン"
                                                        size="sm"
                                                        // backgroundColor: "transparent",
                                                        variant="unstyled"
                                                        colorPalette={"teal"}
                                                        display={{ base: "block", md: "none" }}
                                                >
                                                        <FaBars />
                                                </IconButton>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                                <DrawerHeader>
                                                        <DrawerTitle>Drawer Title</DrawerTitle>
                                                </DrawerHeader>
                                                <DrawerBody p={0} bg="gray.100">
                                                        <Button w="100%" variant="outline">Top</Button>
                                                        <Button w="100%" variant="outline">ユーザー一覧</Button>
                                                        <Button w="100%" variant="outline">設定</Button>
                                                </DrawerBody>
                                                {/* <DrawerFooter>
                                                        <DrawerActionTrigger asChild>
                                                                <Button variant="outline">Cancel</Button>
                                                        </DrawerActionTrigger>
                                                        <Button>Save</Button>
                                                </DrawerFooter> */}
                                                <DrawerCloseTrigger />
                                        </DrawerContent>
                                </DrawerRoot>
                        </Flex>
                </>

        )
});

// Icon Button
// https://www.chakra-ui.com/docs/components/icon-button
