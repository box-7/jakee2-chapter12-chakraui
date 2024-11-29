import { memo } from 'react';
import { HStack, Flex, Box, Stack, Image, Text, Button, Input } from '@chakra-ui/react';
import { useState } from "react";
import { UserCard } from './UserCard';
import { Field } from "@/components/ui/field"
import { useRef } from "react"
import { useLoginUser } from "../../../hooks/useLoginUser";

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
        id: number;
        imageUrl: string;
        userName: string;
        fullName: string;
        email: string;
        phone: string;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
        const { id, imageUrl, userName, fullName, email, phone } = props;
        // console.log("id", id)
        const [open, setOpen] = useState(false);
        const ref = useRef<HTMLInputElement>(null)
        const { loginUser } = useLoginUser();

        // Initialize state
        const [nameState, setName] = useState(userName);
        const [fullNameState, setFullName] = useState(fullName);
        const [emailState, setEmail] = useState(email);
        const [phoneState, setPhone] = useState(phone);

        // Handle input changes
        const handleNameChange = (e) => setName(e.target.value);
        const handleFullNameChange = (e) => setFullName(e.target.value);
        const handleEmailChange = (e) => setEmail(e.target.value);
        const handlePhoneChange = (e) => setPhone(e.target.value);

        // Handle save action
        const handleSave = () => {
                // Process the updated information
                const updatedUser = {
                        id,
                        imageUrl,
                        userName: nameState,
                        fullName: fullNameState,
                        email: emailState,
                        phone: phoneState,
                };
                console.log('Updated User:', updatedUser);
                alert(updatedUser.userName + 'の情報を保存しました');
                // Add your save logic here (e.g., API call)
        };

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
                                                        {loginUser && loginUser.isAdmin ?(
                                                                <>
                                                                        <Field label="名前">
                                                                                <Input placeholder={userName}  onChange={handleNameChange} />
                                                                        </Field>
                                                                        <Field label="フルネーム">
                                                                                <Input placeholder={fullName} onChange={handleFullNameChange} />
                                                                        </Field>
                                                                        <Field label="MAIL">
                                                                                <Input placeholder={email} onChange={handleEmailChange} />
                                                                        </Field>
                                                                        <Field label="TEL">
                                                                                <Input placeholder={phone} onChange={handlePhoneChange} />
                                                                        </Field>
                                                                </>
                                                                ):(
                                                                        <>
                                                                                <Field label="名前">
                                                                                        <Input placeholder={userName}  readOnly />
                                                                                </Field>
                                                                                <Field label="フルネーム">
                                                                                        <Input placeholder={fullName} readOnly />
                                                                                </Field>
                                                                                <Field label="MAIL">
                                                                                        <Input placeholder={email} readOnly />
                                                                                </Field>
                                                                                <Field label="TEL">
                                                                                        <Input placeholder={phone} readOnly />
                                                                                </Field>
                                                                        </>
                                                                )
                                                        }
                                                </Stack>
                                        </DialogBody>

                                        {loginUser && loginUser.isAdmin ?(
                                                        <DialogFooter>
                                                                <DialogActionTrigger asChild>
                                                                        <Button variant="outline">Cancel</Button>
                                                                </DialogActionTrigger>
                                                                <Button colorPalette="green" onClick={handleSave}>Update</Button>
                                                        </DialogFooter>
                                                )
                                                : null
                                        }
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

