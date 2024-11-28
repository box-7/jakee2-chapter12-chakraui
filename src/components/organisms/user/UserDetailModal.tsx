import { memo } from 'react';
import { HStack, Flex, Box, Stack, Image, Text, Button, Input } from '@chakra-ui/react';
import { useState } from "react";
import { UserCard } from './UserCard';
import { Field } from "@/components/ui/field"
import { useRef } from "react"

import {
        DialogRoot,
        DialogTrigger,
        DialogActionTrigger,
        DialogBody,
        DialogContent,
        DialogFooter,
        DialogHeader,
        DialogTitle,
} from "@/components/ui/dialog"

type Props = {
        imageUrl: string;
        userName: string;
        fullName: string;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
        const { imageUrl, userName, fullName } = props;
        const [open, setOpen] = useState(false);
        const ref = useRef<HTMLInputElement>(null)
        return (
                <>
                        <DialogRoot
                                open={open}
                                onOpenChange={(e) => {
                                        setOpen(e.open);
                                }}
                        >

                                <UserCard imageUrl={imageUrl} userName={userName} fullName={fullName} />

                                <DialogContent pb={6}>
                                        <DialogHeader>
                                                <DialogTitle>ユーザー詳細</DialogTitle>
                                        </DialogHeader>
                                        <Button
                                                onClick={() => setOpen(false)}
                                                style={{
                                                        position: 'absolute',
                                                        top: '10px',
                                                        right: '10px',
                                                        background: 'none',
                                                        border: 'none',
                                                        fontSize: '20px',
                                                        cursor: 'pointer',
                                                        color: 'black',
                                                }}
                                                tabIndex={-1}
                                        >
                                                &times;
                                        </Button>
                                        <DialogBody mx="4">
                                                <Stack gap="4">
                                                        <Field label="名前">
                                                                <Input placeholder={userName}  />
                                                        </Field>
                                                        <Field label="フルネーム">
                                                                <Input placeholder={fullName} />
                                                        </Field>
                                                        <Field label="MAIL">
                                                                <Input ref={ref} placeholder="12345@example.com" />
                                                        </Field>
                                                        <Field label="TEL">
                                                                <Input placeholder="090-1111-2222" />
                                                        </Field>
                                                </Stack>
                                        </DialogBody>
                                </DialogContent>
                        </DialogRoot >
                </>
        )
});



// {/* <Stack  textAlign="center" >
//         <Image src="https://source.unsplash.com/photos/random" />
//         <Image
//                 borderRadius="full"
//                 boxSize="160px"
//                 // src="https://picsum.photos/200"
//                 src={imageUrl}
//                 alt={userName}
//                 m="auto"
//         />
//         <Text fontSize="lg" fontWeight="bold">{userName}</Text>
//         <Text fontSize="sm" color="gray">{fullName}</Text>
// </Stack> */}

