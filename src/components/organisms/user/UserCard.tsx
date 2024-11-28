import { memo } from 'react';
import { Box, Stack, Image,Text } from '@chakra-ui/react';

import {
        DialogTrigger,
} from "@/components/ui/dialog"
import { useRef } from "react"

type Props = {
        imageUrl: string;
        userName: string;
        fullName: string;
};

export const UserCard: React.FC<Props> = memo((props) => {
        const { imageUrl, userName, fullName } = props;
        const ref = useRef<HTMLInputElement>(null)
        return (
                <>
                        <DialogTrigger asChild>
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
                                                <Image
                                                        borderRadius="full"
                                                        boxSize="160px"
                                                        src={imageUrl}
                                                        alt={userName}
                                                        m="auto"
                                                />
                                                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                                                <Text fontSize="sm" color="gray">{fullName}</Text>
                                        </Stack>
                                </Box>
                        </DialogTrigger>
                </>
        )
});








// export const UserCard: React.FC<Props> = memo((props) => {
//         const { imageUrl, userName, fullName } = props;
//         const ref = useRef<HTMLInputElement>(null)
//         const [open, setOpen] = useState(false);
//         return (
//                 <Box
//                         w="260px"
//                         h="260px"
//                         bg="white"
//                         borderRadius="10px"
//                         shadow="md"
//                         p={4}
//                         _hover={{ cursor: "pointer", opacity: 0.8 }}
//                 >

//                         <DialogRoot initialFocusEl={() => ref.current}>

//                         <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} >
//                                 <DialogTrigger asChild>
//                                         <Stack  textAlign="center" >
//                                                 <Image
//                                                         borderRadius="full"
//                                                         boxSize="160px"
//                                                         src={imageUrl}
//                                                         alt={userName}
//                                                         m="auto"
//                                                 />
//                                                 <Text fontSize="lg" fontWeight="bold">{userName}</Text>
//                                                 <Text fontSize="sm" color="gray">{fullName}</Text>
//                                         </Stack>
//                                 </DialogTrigger>
//                                 <DialogContent pb={6}>
//                                         <DialogHeader>
//                                                 <DialogTitle>ユーザー詳細</DialogTitle>
//                                         </DialogHeader>
//                                         <Button
//                                                 onClick={() => setOpen(false)}
//                                                 style={{
//                                                         position: 'absolute',
//                                                         top: '10px',
//                                                         right: '10px',
//                                                         background: 'none',
//                                                         border: 'none',
//                                                         fontSize: '20px',
//                                                         cursor: 'pointer',
//                                                         color: 'black' ,
//                                                 }}
//                                                 tabIndex={-1}
//                                         >
//                                                 &times;
//                                         </Button>

//                                         <DialogBody mx="4">
//                                                 <Stack gap="4">
//                                                         <Field label="名前">
//                                                                 <Input placeholder="First Name" />
//                                                         </Field>
//                                                         <Field label="フルネーム">
//                                                                 <Input  placeholder="Focus First" />
//                                                         </Field>
//                                                         <Field label="MAIL">
//                                                                 <Input ref={ref} placeholder="Focus First" />
//                                                         </Field>
//                                                         <Field label="TEL">
//                                                                 <Input placeholder="Focus First" />
//                                                         </Field>
//                                                 </Stack>
//                                         </DialogBody>
//                                         <DialogFooter>
//                                                 <DialogActionTrigger asChild>
//                                                         <Button variant="outline">Cancel</Button>
//                                                 </DialogActionTrigger>
//                                                 <Button>Save</Button>
//                                         </DialogFooter>
//                                 </DialogContent>
//                         </DialogRoot>
//                 </Box>
//         )
// });
