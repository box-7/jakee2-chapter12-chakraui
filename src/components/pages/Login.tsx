import { memo } from 'react';
import { Box, Flex, Heading, Input, Button, Stack } from '@chakra-ui/react';
// import { Divider } from '@chakra-ui/react';

const Divider = () => (
        <Box as="hr" border="1px solid" borderColor="gray.200" my="4" />
);

export const Login: React.FC = memo(() => {
        return (
                <Flex align="center" justify="center" height="100vh">
                        <Box bg="white"  w="sm" p={4} borderRadius="md" shadow="md" >
                                <Heading  as="h1" size="lg"textAlign="center" >ユーザー管理アプリ</Heading>
                                <Divider />
                                <Stack py={4} px={10} > {/* spacingが効かない */}
                                        <Input placeholder="ユーザーID" marginY="6"  />
                                        <Button bg="teal.400" color="white" _hover={{opacity: 0.8}}>ログイン</Button>
                                </Stack>
                        </Box>
                </Flex>
        )
});

