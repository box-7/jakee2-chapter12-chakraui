import { memo } from 'react';
import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Spinner } from "@chakra-ui/react"
type Props = {
        children: ReactNode;
        disabled?: boolean;
        loading?: boolean;
        onClick: () => void;
        // showToast: (title: any, status: any) => void;
};

export const PrimaryButton: React.FC<Props> = memo((props) => {
        const { children, disabled = false, loading= false, onClick } = props;
        return (
                <>
                        <Button
                                bg="teal.400"
                                color="white"
                                _hover={{opacity: 0.8}}
                                disabled={disabled || loading}
                                // isLoading={loading}
                                onClick={onClick}
                        >
                                {loading ? <Spinner size="sm" /> : children}
                        </Button>
                </>

        )
});

