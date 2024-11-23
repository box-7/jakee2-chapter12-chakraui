import { memo } from 'react';
import { Flex, Heading, Link, Box, IconButton, Button } from '@chakra-ui/react';
import { FaBars } from "react-icons/fa6";
import { DrawerTrigger } from "@/components/ui/drawer"

// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
export const MenuIconButton: React.FC = memo(() => {
        return (
                <>
                        <DrawerTrigger asChild> 
                                <IconButton
                                        align="right"
                                        aria-label="メニューボタン"
                                        size="sm"
                                        variant="unstyled"
                                        colorPalette={"teal"}
                                        display={{ base: "block", md: "none" }}
                                >
                                        <FaBars />
                                </IconButton>
                        </DrawerTrigger>
                </>

        )
});



