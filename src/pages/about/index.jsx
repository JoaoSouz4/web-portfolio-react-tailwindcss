import Section from "../../components/section";
import fotosocial from '../../assets/fotosocial.jpg';
import {HiAcademicCap} from 'react-icons/hi';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdDeveloperMode, MdLocationOn} from 'react-icons/md';

export default function AboutMe(){
    return(
        <Section>
            <div className = 'flex flex-col justify-center gap-8 w-full h-full md:flex-row md:items-center'>
                <div className = ' w-full'>
                    <div className = 'flex flex-col gap-8 justify-center items-start'>

                        <div className = 'flex gap-2  md:flex-row'>
                            <img
                                className = 'w-20 h-20 object-cover rounded-full'
                                src= {fotosocial} 
                                alt="" 
                            />

                            <div className = 'flex flex-col justify-between'>
                                <label className = 'text-primary text-lg font-bold sm:text-2xl md:text-2xl'> João Vitor da Cunha Souza</label>
                                <div className = 'flex items-center gap-2 '>
                                    <MdDeveloperMode />
                                    <label className = 'text-md text-center text-gray-dark sm:text-xl md:text: 2xl'>Web Developer</label>
                                </div>
                            </div>
                        </div>

                        <div className = 'flex flex-col items-start w-full gap-3 sm:gap-4 sm:items-start'>
                            <label className = 'flex items-center gap-1'>
                                <HiAcademicCap className = 'text-xl sm:text-2xl'/>
                                <div className = 'relative'>
                                    <div className = 'text-sm sm:text-xl'>Bacharelado em Sistemas de informação</div>
                                    <div className = 'absolute top-[-1.5rem] right-[-1rem] p-1 text-[10px] bg-light font-bold text-dark rounded-md' >
                                        Cursando...
                                    </div>
                                </div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <FaBirthdayCake className = 'text-xl sm:text-2xl'/>
                                <div className='text-sm sm:text-xl'>31/10/2002 (20 anos)</div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <MdLocationOn className = 'text-xl sm:text-2xl'/>
                                <div className='text-sm sm:text-xl'>PortoVelho (RO) | Brasil</div>
                            </label>
                        </div>
                        
                    </div>
                </div>

                <div className = 'p-6 w-full bg-backgroundhover rounded-md'>
                    <div className = 'flex flex-col items-center justify-around h-full gap-2 overflow-y-auto'>
                        <p className = 'md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aut debitis,
                            sit nemo odio dolorum numquam dignissimos ab dicta
                            veniam, nihil iure facere natus! Optio, officiis? Numquam eius a asperiores.
                        </p>
                        <p className = 'md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aut debitis,
                            sit nemo odio dolorum numquam dignissimos ab dicta
                            veniam, nihil iure facere natus! Optio, officiis? Numquam eius a asperiores.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}