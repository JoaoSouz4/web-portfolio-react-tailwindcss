import Nav from './nav'
import LogoDefault from './logoDefault';

export default function MenuBar(){
    return(
        <header className = 'z-40 fixed top-0 w-full bg-dark flex justify-around items-center p-5 bg-gray-800 shadow-2xl'>
            <LogoDefault />
            <Nav />
        </header>
    )
}