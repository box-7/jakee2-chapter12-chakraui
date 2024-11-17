// 最初はApp.tsxではなく、App.Appが読まれていたが、tsconfig.jsonを修正してApp.tsxが読まれるようにした

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // import { Button } from "@/components/ui/button"
// import { Button } from './components/ui/button';
// import { HStack } from "@chakra-ui/react";
// var App = function () {
//     return (_jsxs(HStack, { children: [_jsx(Button, { children: "Click me" }), _jsx(Button, { children: "Click me" })] }));
// };
// export default App;
