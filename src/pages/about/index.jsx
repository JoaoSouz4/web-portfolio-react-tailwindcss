import Section from "../../components/section";
import fotosocial from '../../assets/fotosocial.jpg';
import {HiAcademicCap} from 'react-icons/hi';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdDeveloperMode} from 'react-icons/md';

export default function AboutMe(){
    return(
        <Section title = 'Sobre mim'>
            <div className = 'flex justify-center  p-4 rounded-2xl w-full'>
                <div className = ' w-[50%]'>
                    <div className = 'flex items-center gap-2'>

                        <div>
                            <img
                                className = 'w-56 h-56 object-cover rounded-full shadow-2xl shadow-primary'
                                src= {fotosocial} 
                                alt="" 
                            />
                        </div>

                        <div className = 'flex flex-col gap-7'>
                            <div className = 'flex flex-col gap-1 '>
                                <label className = 'text-primary text-2xl font-bold '> João Vitor da Cunha Souza</label>
                                <div className = 'flex items-center gap-2 '>
                                    <MdDeveloperMode />
                                    <label className = 'text-lg text-gray-dark'>Web Developer</label>
                                </div>
                            </div>

                            <div className = 'flex flex-col gap-2'>
                                <label className = 'flex gap-1 items-center'>
                                    <HiAcademicCap className = 'text-xl'/>
                                    <div className = 'relative'>
                                        <div>Bacharelado em Sistemas de informação</div>
                                        <div className = 'absolute top-[-1.5rem] right-[-1rem] p-1 text-[10px] bg-light font-bold text-dark rounded-md' >
                                            Cursando...
                                        </div>
                                    </div>
                                </label>

                                <label className = 'flex gap-1 items-center'>
                                    <FaBirthdayCake className = 'text-xl'/>
                                    31/10/2002 (20 anos)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'p-6 w-1/2 bg-backgroundhover rounded-md'>
                    <div className = 'flex flex-col justify-around h-full gap-2'>
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