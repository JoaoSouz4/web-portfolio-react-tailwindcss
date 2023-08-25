import logo from '../../assets/logo.png'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export default function Footer(){
    return (
        <footer className = 'bg-dark w-full p-6'>
            <div className = 'flex flex-col gap-4 justify-center items-center my-5'>
                <div className = 'w-32'>
                    <img src= {logo} alt="" />
                </div>

                <div className="flex justify-center">
                    <div className = 'flex gap-4  px-8'>
                        <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                            <AiFillInstagram className = 'text-2xl'/>
                        </div>
                        <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                            <AiFillLinkedin className = 'text-2xl'/>
                        </div>
                        <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                            <AiFillGithub className = 'text-2xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}