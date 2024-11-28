import { memo, useEffect } from 'react';
import { HStack, Flex, Spinner, Center } from '@chakra-ui/react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: React.FC = memo(() => {
        const { getUsers, loading, users } = useAllUsers();
        useEffect(() => getUsers(), []);
        return (
                <>
                        {loading ? (
                                <Center h="100vh">
                                        <Spinner />
                                </Center>)
                                : (
                                        <HStack wrap="wrap" p={{ base: 4, md: 10 }}>
                                                {users.map((user) => (
                                                        // console.log("user", user),
                                                        <Flex key={user.id} align="flex-start" mx="auto">
                                                                <UserDetailModal
                                                                        id={user.id}
                                                                        imageUrl="https://picsum.photos/200"
                                                                        userName={user.username}
                                                                        fullName={user.name}
                                                                        email={user.email}
                                                                        phone={user.phone}
                                                                />
                                                        </Flex>
                                                ))}
                                        </HStack>
                                )
                        }
                </>

        )
});

                                // <Box
                                //         w="260px"
                                //         h="260px"
                                //         bg="white"
                                //         borderRadius="10px"
                                //         shadow="md"
                                //         p={4}
                                //         _hover={{ cursor: "pointer", opacity: 0.8 }}
                                // >
                                //         <Stack  textAlign="center" >
                                //                 {/* <Image src="https://source.unsplash.com/photos/random" /> */}
                                //                 <Image
                                //                         borderRadius="full"
                                //                         boxSize="160px"
                                //                         src="https://picsum.photos/200"
                                //                         alt="プロフィール画像"
                                //                         m="auto"
                                //                 />
                                //                 <Text fontSize="lg" fontWeight="bold">とり</Text>
                                //                 <Text fontSize="sm" color="gray">たい</Text>
                                //         </Stack>
                                // </Box> 

{/* <HStack wrap="wrap" spacing="24px" p={{ base: 4, md: 10 }}>
  {users.map(obj => (
    <Flex key={obj.id} align="flex-start">
      <Box
        id={obj.id}
        imageUrl="https://source.unsplash.com/random"
        userName={obj.username}
        fullName={obj.name}
        onClick={onClickUser}
      />
    </Flex>
  ))}
</HStack> */}
// import { HStack } from "@chakra-ui/react";

// <HStack wrap="wrap" spacing="24px">
//   {/* 子コンポーネント */}
// </HStack>

// import { Flex } from "@chakra-ui/react";

// <Flex wrap="wrap" gap="16px">
//   {/* 子コンポーネント */}
// </Flex>



// Wrap: Replace with HStack and add wrap=wrap to it.
// WrapItem: Replace with Flex and add align=flex-start to it.

{/* <Wrap p={{ base: 4, md: 10 }}>
{users.map(obj => (
  <WrapItem key={obj.id} mx="auto">
    <UserCard
      id={obj.id}
      imageUrl="https://source.unsplash.com/random"
      userName={obj.username}
      fullName={obj.name}
      onClick={onClickUser}
    />
  </WrapItem>
))}
</Wrap> */}