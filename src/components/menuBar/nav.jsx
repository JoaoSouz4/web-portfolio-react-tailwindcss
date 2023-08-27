import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <nav className = 'hidden md:flex'> 
            <ul className = 'flex gap-4'>
                <li 
                    className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'
                >
                    
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                    Quem sou
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                    Projetos
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                    Fale comigo
                </li>
            </ul>
        </nav>
    )
}