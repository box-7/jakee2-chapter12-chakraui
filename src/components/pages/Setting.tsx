import { memo } from 'react';
import {Button} from '@chakra-ui/react';

export const Setting: React.FC = memo(() => {
        return (
                <>
                        <p>設定ページです</p>
                        <Button variant="surface" colorPalette="teal">
                                Auto Button
                        </Button>
                </>
        )
});



