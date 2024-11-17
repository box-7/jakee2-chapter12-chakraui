import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Box } from "@chakra-ui/react"
// mport { ChakraProvider, Box, ProgressRootProvider } from '@chakra-ui/react';
// import system from "./theme/theme"; // 修正したテーマをインポート
import { Theme } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
                <Provider>
                        {/* <Theme appearance="cyan.200"
                                position="absolute"
                                top="0"
                                left="0"
                                width="100vw"
                                height="100vh"
                        > */}

                        <Box
                                bg="gray.100"
                                position="absolute"
                                top="0"
                                left="0"
                                width="100vw"
                                height="100vh"
                                color="gray.800"
                        >
                                <App />
                        </Box>
                         {/* </Theme> */}

                </Provider>
        </React.StrictMode>,
)



// import { Provider } from "@/components/ui/provider";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// // import system from "./theme/theme"; // 修正したテーマをインポート
// import { ChakraProvider, Box, ProgressRootProvider } from '@chakra-ui/react';

// ReactDOM.createRoot(document.getElementById("root")!).render(
//         <Provider>
//                 <Box
//                         bg="gray.100"
//                         position="absolute"
//                         top="0"
//                         left="0"
//                         width="100vw"
//                         height="100vh"
//                 >
//                         <App />
//                 </Box>
//         </Provider>,
// );





// import { Provider } from "@/components/ui/provider"
// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import system from "./theme/theme"; // 修正したテーマをインポート

// import { Theme } from '@chakra-ui/react';



// ReactDOM.createRoot(document.getElementById("root")!).render(
//         <React.StrictMode>
//                 <Provider>
//                         <Theme appearance="gray.100">
//                                 <App />
//                         </Theme>
//                 </Provider>
//         </React.StrictMode>,
// )

