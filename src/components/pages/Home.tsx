import { memo } from 'react';
import {Button} from '@chakra-ui/react';

// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
export const Home: React.FC = memo(() => {
        return (
                <>
                        <p>home</p>
                        <Button variant="surface" colorPalette="teal">
                                Auto Button
                        </Button>
                </>

        )
});


