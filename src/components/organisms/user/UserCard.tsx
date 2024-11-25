import { memo } from 'react';
// import { Button } from '@chakra-ui/react';
// import { ReactNode } from 'react';
// import { Spinner } from "@chakra-ui/react"

import { HStack, Flex, Box, Stack, Image,Text } from '@chakra-ui/react';


type Props = {
        imageUrl: string;
        userName: string;
        fullName: string;
};

export const UserCard: React.FC<Props> = memo((props) => {
        const { imageUrl, userName, fullName } = props;
        return (
                <Box
                        w="260px"
                        h="260px"
                        bg="white"
                        borderRadius="10px"
                        shadow="md"
                        p={4}
                        _hover={{ cursor: "pointer", opacity: 0.8 }}
                >
                        <Stack  textAlign="center" >
                                {/* <Image src="https://source.unsplash.com/photos/random" /> */}
                                <Image
                                        borderRadius="full"
                                        boxSize="160px"
                                        // src="https://picsum.photos/200"
                                        src={imageUrl}
                                        alt={userName}
                                        m="auto"
                                />
                                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                                <Text fontSize="sm" color="gray">{fullName}</Text>
                        </Stack>
                </Box>
        )
});





