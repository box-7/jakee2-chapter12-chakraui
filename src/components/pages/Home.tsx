import { memo } from 'react';
import {Button} from '@chakra-ui/react';
// import { Toaster, toaster } from "@/components/ui/toaster"
// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
export const Home: React.FC = memo(() => {
        return (
                <>
                        <p>home</p>
                        <Button variant="surface" colorPalette="teal">
                                Auto Button
                        </Button>
                        {/* <Toaster /> */}
                        {/* {toaster.create({
                                                                description: "File saved successfully21",
                                                                type: "info",
                                                                duration: 5000,
                                                        })
                                                } */}
                </>

        )
});


