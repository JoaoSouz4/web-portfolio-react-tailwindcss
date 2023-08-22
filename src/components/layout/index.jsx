import MenuBar from "../menuBar";
import Main from '../main';

export default function Layout(){
    return(
        <div className = 'w-full flex justify-center'>
            <MenuBar />
            <Main />
        </div>
    )
}