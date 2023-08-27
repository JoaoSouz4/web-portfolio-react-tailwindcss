import Section from "../../components/section";
import fotosocial from '../../assets/fotosocial.jpg';
import {HiAcademicCap} from 'react-icons/hi';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdDeveloperMode, MdLocationOn} from 'react-icons/md';

export default function AboutMe(){
    return(
        <Section>
            <div className = 'flex flex-col justify-center rounded-2xl w-full h-full'>
                <div className = ' w-full h-1/2'>
                    <div className = 'flex flex-col gap-8 justify-center items-start gap-2'>

                        <div className = 'flex gap-2'>
                            <img
                                className = 'w-20 h-20 object-cover rounded-full'
                                src= {fotosocial} 
                                alt="" 
                            />

                            <div className = 'flex flex-col gap-1 '>
                                <label className = 'text-primary text-lg font-bold '> João Vitor da Cunha Souza</label>
                                <div className = 'flex items-center gap-2 '>
                                    <MdDeveloperMode />
                                    <label className = 'text-md text-center text-gray-dark'>Web Developer</label>
                                </div>
                            </div>
                        </div>

            
                        <div className = 'flex flex-col items-start w-full gap-3'>
                            <label className = 'flex gap-1'>
                                <HiAcademicCap className = 'text-xl'/>
                                <div className = 'relative'>
                                    <div className = 'text-sm'>Bacharelado em Sistemas de informação</div>
                                    <div className = 'absolute top-[-1.5rem] right-[-1rem] p-1 text-[10px] bg-light font-bold text-dark rounded-md' >
                                        Cursando...
                                    </div>
                                </div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <FaBirthdayCake className = 'text-xl'/>
                                <div className='text-sm'>31/10/2002 (20 anos)</div>
                            </label>

                            <label className = 'flex gap-1 items-center'>
                                <MdLocationOn className = 'text-xl'/>
                                <div className='text-sm'>PortoVelho (RO) | Brasil</div>
                            </label>
                        </div>
                        
                    </div>
                </div>

                <div className = 'p-6 w-full bg-backgroundhover rounded-md h-full mt-8'>
                    <div className = 'flex flex-col items-center justify-around h-full gap-2 overflow-y-auto'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aut debitis,
                            sit nemo odio dolorum numquam dignissimos ab dicta
                            veniam, nihil iure facere natus! Optio, officiis? Numquam eius a asperiores.
                        </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aut debitis,
                            sit nemo odio dolorum numquam dignissimos ab dicta
                            veniam, nihil iure facere natus! Optio, officiis? Numquam eius a asperiores.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}