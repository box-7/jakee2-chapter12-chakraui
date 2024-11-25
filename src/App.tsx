import { Provider } from "@/components/ui/provider"
import { Box } from "@chakra-ui/react"

import { Router } from "./router/Router"
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
// 単一の主要なエクスポートがある場合はexport defaultを使う → import {} 不要
// 複数のエクスポートがある場合はexportを使う→ import {} 必要

// import { ChakraProvider } from "@chakra-ui/react";
// import { Theme } from "@chakra-ui/react"
// import theme from "./theme/theme";

const App = () => {
        return (
                <>
                        <Provider>
                                <Box
                                        bg="gray.100"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        // width="100vw"
                                        width="auto"
                                        // height="100vh"
                                        // height="auto"
                                        minHeight="100vh"
                                        color="gray.400"
                                >
                                        {/* Toasterを設置 */}
                                        <Toaster />
                                        <RouterProvider router={Router} />
                                </Box>
                        </Provider>

                </>
        )
};

export default App;
