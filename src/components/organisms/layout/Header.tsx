import { memo } from 'react';

// VoidFunctionComponentの略で、Reactの関数コンポーネントを定義するための型
export const Header: React.FC = memo(() => {
        return (
                <div style={{height:"50px", backgroundColor:"teal"}}>
                        <p>header</p>
                </div>
        )
});

