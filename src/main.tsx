
import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
                <Provider>
                        <App />
                </Provider>
        </React.StrictMode>,
)




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from '@/components/ui/provider';

// // ダミーのコンポーネントを作成
// const DummyComponent = (props: any) => {
//   return <div>Hello, this is a dummy component!</div>;
// };

// // ダミーのプロパティを作成
// const dummyPageProps = {};

// // ReactDOM.createRoot の部分を修正
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Provider>
//       <App Component={DummyComponent} pageProps={dummyPageProps} />
//     </Provider>
//   </React.StrictMode>
// );




// import { Provider } from "@/components/ui/provider"
// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"

// ReactDOM.createRoot(document.getElementById("root")!).render(
//         <React.StrictMode>
//                 <Provider>
//                         <App />
//                 </Provider>
//         </React.StrictMode>,
// )



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { Provider } from "@/components/ui/provider"

// createRoot(document.getElementById('root')!).render(
//         <StrictMode>
//                 <Provider>
//                         <App />
//                 </Provider>
//         </StrictMode>,
// )
