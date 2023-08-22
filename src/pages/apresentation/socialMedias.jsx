import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

export default function SocialMedias(){
    return(
        <div className = 'absolute bottom-4 left-0'>
            <div className = 'flex gap-4 border border-light rounded-full py-2 px-8'>
                <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                    <AiFillInstagram className = 'text-3xl'/>
                </div>

                <div className = 'hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1'>
                    <AiFillLinkedin className = 'text-3xl'/>
                </div>
            </div>
        </div>
    )
}