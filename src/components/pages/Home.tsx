import { memo } from 'react';
import { Outlet } from 'react-router-dom';
// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
export const Home: React.FC = memo(() => {
        return (
                <>
                        <p>home</p>
                        <Outlet />
                </>

        )
});


