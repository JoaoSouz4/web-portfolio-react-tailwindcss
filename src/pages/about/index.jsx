import Section from "../../components/section";
import fotosocial from '../../assets/fotosocial.jpg';
import {HiAcademicCap} from 'react-icons/hi';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdDeveloperMode, MdLocationOn} from 'react-icons/md';

export default function AboutMe(){
    return(
        <Section>
            <div className = 'flex flex-col justify-center gap-8 w-full h-full md:flex-row md:items-center lg:gap-1'>
                <div className = ' w-full'>
                    <div className = 'flex flex-col gap-3 justify-center items-start lg:flex-row lg:items-center'> 

                        <div className = 'flex gap-3  md:flex-row lg:w-56 lg:h-56 lg:items-center'>
                            <img
                                className = 'w-20 h-20 object-cover rounded-full lg:w-40 lg:h-40'
                                src= {fotosocial} 
                                alt="" 
                            />

                            <div className = 'flex flex-col justify-center lg:hidden'>
                                <label className = 'text-primary text-lg font-bold sm:text-2xl md:text-2xl'> João Vitor da Cunha Souza</label>
                                <div className = 'flex items-center gap-2 '>
                                    <MdDeveloperMode />
                                    <label className = 'text-md text-center text-gray-dark sm:text-xl md:text: 2xl'>Web Developer</label>
                                </div>
                            </div>
                        </div>

                        <div className = 'flex flex-col items-start w-full gap-3 sm:gap-4 sm:items-start'>

                            <div className = ' hidden lg:flex flex-col justify-between'>
                                <label className = 'text-primary text-lg font-bold sm:text-2xl md:text-2xl'> João Vitor da Cunha Souza</label>
                                <div className = 'flex items-center gap-2 '>
                                    <MdDeveloperMode />
                                    <label className = 'text-md text-center text-gray-dark sm:text-xl md:text: 2xl'>Web Developer</label>
                                </div>
                            </div>

                            <label className = 'flex items-center gap-1'>
                                <HiAcademicCap className = 'text-xl sm:text-2xl'/>
                                <div className = 'relative'>
                                    <div className = 'text-sm sm:text-lg'>Bacharelado em Sistemas de informação</div>
                                    <div className = 'absolute top-[-1.5rem] right-[-1rem] p-1 text-[10px] bg-light font-bold text-dark rounded-md' >
                                        Cursando...
                                    </div>
                                </div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <FaBirthdayCake className = 'text-lg sm:text-2xl'/>
                                <div className='text-sm sm:text-lg'>31/10/2002 (20 anos)</div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <MdLocationOn className = 'text-xl sm:text-2xl'/>
                                <div className='text-sm sm:text-lg'>PortoVelho (RO) | Brasil</div>
                            </label>
                        </div>
                        
                    </div>
                </div>

                <div className = 'p-6 w-full bg-backgroundhover rounded-md lg:w-[100%]'>
                    <div className = 'flex flex-col items-center justify-around h-full gap-2 overflow-y-auto'>
                        <p className = 'md:text-lg'>
                            Sou um intusiasta apaixonado por programação e <strong>desenvolver soluções</strong> utilizando o ecossitema JavaScript.
                        </p>

                        <p className = 'md:text-lg'>
                            Utilizo <strong>React</strong> para criar e gerenciar interfaces além de <strong>TailwindCss e StyledComponets</strong> para estilizar componentes.
                        </p>

                        <p className = 'md:text-lg'>
                            Venho me capacitando em <strong>node js</strong> visando criar aplicações cada vez mais abrangentes e sofisticadas, sempre em busca de aprendizado e experiências.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}