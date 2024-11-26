import { toaster } from "@/components/ui/toaster";
import { useCallback } from 'react';


export const useToast = () => {
        const Toast = useCallback((description, type) => {
                toaster.create({
                        description: description,
                        type: type,
                });
        }, []);

        return { Toast };
};


// export const Toast = useCallback((description, type) => {
//         toaster.create({
//                 description: description,
//                 type: type,
//         });
// }, []);

// 使わない

// import { useCallback } from 'react';
// // import { toaster } from "@/components/ui/toaster"
// import { Toaster, toaster } from "@/components/ui/toaster"

// type Props = {
//         title: string;
//         status: "info" | "warning" | "success" | "error";
// };

// export const useMessage = () => {

//         const showMessage = useCallback((props: Props) => {
//                 const { title, status } = props;
//                 // const showToast = (title, status) => {
//                 //         console.log("toaster")
//                 //         toaster.create({
//                 //                 description: title,
//                 //                 type: status,
//                 //         });
//                 // };

//         }, []); // `useCallback` で関数をメモ化

// //         return { 
// //                 <Toaster />
// //                 showMessage
// //         };
// // };

//         return (
//                 // <Toaster />
//                 {showMessage}
//         )
// };







// import { useCallback } from "react";
// import { Toaster, toaster } from "@/components/ui/toaster";

// type Props = {
//   title: string;
//   status: "info" | "warning" | "success" | "error";
// };

// export const useMessage = () => {
//   // `showMessage`関数をuseCallbackでメモ化
//   const showMessage = useCallback((props: Props) => {
//     const { title, status } = props;

//     toaster.create({
//       description: title,
//       type: status,
//     });
//   }, []); 

//   // フックとして利用可能な形でオブジェクトを返す
//   return { 
//     ToasterComponent: <Toaster />, 
//     showMessage 
//   };
// };