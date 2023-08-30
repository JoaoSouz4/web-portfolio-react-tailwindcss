import { Link, Element, animateScroll as scroll } from 'react-scroll';

export default function Nav(){
    return(
        <nav className = 'hidden md:flex'> 
            <ul className = 'flex gap-4'>
                <li  className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'
                >
                    <Link 
                        to = 'apresentation' 
                        smooth={true} 
                        duration={500}>
                        Home
                    </Link>
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                <Link 
                        to = 'about' 
                        smooth={true} 
                        duration={500}>
                        Sobre mim
                    </Link>
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                    <Link 
                        to = 'myprojects' 
                        smooth={true} 
                        duration={500}>
                        Meus Projetos
                    </Link>
                </li>

                <li className = 'text-[#aaaaaa] hover:text-primary hover:duration-300 hover:ease cursor-pointer'>
                <Link 
                        to = 'contact' 
                        smooth={true} 
                        duration={500}>
                        Fale Comigo
                    </Link>
                </li>
            </ul>
        </nav>
    )
}