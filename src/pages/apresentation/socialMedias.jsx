import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

export default function SocialMedias(){
    return(
        <div className = 'absolute bottom-4 left-0'>
            <div className = 'flex gap-4 border border-light rounded-full p-2'>
                <div>
                    <AiFillInstagram className = 'text-3xl'/>
                </div>
                <div>
                    <AiFillLinkedin className = 'text-3xl'/>
                </div>
            </div>
        </div>
    )
}