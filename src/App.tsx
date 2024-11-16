import { Button } from './components/ui/button';
import { HStack } from "@chakra-ui/react"

const App = () => {
        return (
                <HStack>
                        <Button>Click me</Button>
                        <Button>Click me</Button>
                </HStack>
        )
}

export default App

// import React from 'react';
// import { ChakraProvider, HStack } from '@chakra-ui/react';
// import { Button } from '@/components/ui/button';

// const Demo = () => {
//   return (
//     <HStack spacing={4}>
//       <Button colorScheme="teal" size="md">
//         Click me
//       </Button>
//       <Button colorScheme="blue" size="md">
//         Click me
//       </Button>
//     </HStack>
//   );
// };

// function App({ Component, pageProps }: { Component: any; pageProps: any; }): JSX.Element {
//   return (
//     <ChakraProvider>
//       <Demo />
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// export default App;




// function App({ Component, pageProps }: { Component: any; pageProps: any; }): JSX.Element {
//         return <Component {...pageProps} />;
// }

// export default App;

// import { Provider } from "@/components/ui/provider.tsx"
// import { avatarAnatomy } from "@chakra-ui/react/anatomy"

// function App({ Component, pageProps }: { Component: any; pageProps: any; }): JSX.Element {
//         return <Component {...pageProps} />;
//       }


// function App({ Component, pageProps }) {
//   return (
//         <Button>Hello World</Button>
// //     <Provider>
// //       <Component {...pageProps} />
// //     </Provider>
//   )
// }

// export default App

// import { Provider } from "@/components/ui/provider"
// import { defaultSystem, Button } from "@chakra-ui/react"

// export const App = ({ }) => (

//         <Provider value={defaultSystem}>
//                 {/* <Component /> */}
//                 <Button colorScheme="teal">Button</Button>

//         </Provider>
// )




// import { ChakraProvider, Button } from "@chakra-ui/react";

// export default function App() {
//   return (
//     <ChakraProvider>
//       <Button>Hello World</Button>
//     </ChakraProvider>
//   );
// }

// import { ChakraProvider, Button } from '@chakra-ui/react'
// import './App.css'



// export default function App() {
//         return (
//                 <ChakraProvider>
//                         {/* <Text fontSize="2xl">Hello World</Text> */}
//                         <Button colorScheme="teal">Button</Button>
//                 </ChakraProvider>
//         );
// }


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>

//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
