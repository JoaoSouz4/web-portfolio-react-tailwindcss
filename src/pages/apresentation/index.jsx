import Section from "../../components/section";
import Button from '../../components/button';
import SocialMedias from './socialMedias.jsx';
import logo from '../../assets/logo.png';

export default function Apresentation(){
    return(
        <Section>
            <div className = 'flex justify-between'>
                <div className = 'max-w-[50%]'>
                    <div className = 'flex flex-col gap-2'>
                        <h1 className = ' text-primary font-bold text-4xl'>Bem Vindo!</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic optio aliquid expedita, tempora,
                            dolorum quas deserunt vero unde odit reprehenderit architecto? Ipsam minus obcaecati provident,
                            sit officia facere numquam deleniti!
                        </p>
                    </div>
                    <div className = 'flex gap-5 mt-4'>
                        <Button.Root>
                            <Button.Label label = 'Baixar CV' isBold = {true}/>
                        </Button.Root>
                        <Button.Root style = 'leaked'>
                            <Button.Label label = 'Git Hub' />
                        </Button.Root>
                    </div>
                </div>
                <div className = 'w-full flex justify-center'>
                    <img 
                        src={logo} 
                        alt="João Souza logo" 
                        className = 'w-[50%] object-contain'
                    />
                </div>
            </div>

            <SocialMedias />
        </Section>
    )
}