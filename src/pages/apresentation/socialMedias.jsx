import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export default function SocialMedias(){
    return(
        <div className = 'absolute bottom-5 flex justify-center'>
            <div className = 'flex gap-4 border border-light rounded-full py-2 px-8'>
                <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                    <AiFillInstagram className = 'text-3xl'/>
                </div>

                <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                    <AiFillLinkedin className = 'text-3xl'/>
                </div>

                <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                    <AiFillGithub className = 'text-3xl'/>
                </div>
            </div>
        </div>
    )
}