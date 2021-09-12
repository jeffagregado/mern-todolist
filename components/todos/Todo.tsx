import { ReactNode } from "react";

interface Props {
    children?:ReactNode
}

const Todo = ({children}: Props) => {
    return ( 
        <li>{children}</li>
     );
}
 
export default Todo;