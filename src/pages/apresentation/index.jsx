import Section from "../../components/section";
import Button from '../../components/button';
import SocialMedias from './socialMedias.jsx';
import logo from '../../assets/logo.png';
import Balancer from 'react-wrap-balancer'

export default function Apresentation(){
    return(
        <Section>

            <div className = ' h-full flex flex-col justify-center gap-10 sm:flex-row-reverse sm:items-center'>

                <div className = ' w-300px flex justify-center sm:w-full'>
                    <img
                        src={logo}
                        alt="João Souza logo"
                        className = 'w-[75%] object-contain flex justify-center'
                    />
                </div>
                
                <div className = 'w-full'>
                    <div className = 'w-full flex flex-col gap-4'>
                        <h1 className = ' text-primary font-bold text-4xl text-center md:text-start'>Olá, Bem Vindo!</h1>
                        <p className = 'text-[1.2rem] text-center md:text-start'>
                            <Balancer>
                                Conheça meu trabalho como desenvolvedor web, acompanhe meus últimos projetos através
                                deste web App desenvolvido por mim para ser o meu portfólio
                            </Balancer>
                        </p>
                    </div>

                    <div className = 'flex gap-5 mt-4 justify-center w-full md:justify-start'>
                        <Button.Root>
                            <Button.Label label = 'Baixar CV' isBold = {true}/>
                        </Button.Root>
                        <Button.Root style = 'leaked'>
                            <Button.Label label = 'Git Hub' />
                        </Button.Root>
                    </div>
                </div>
                
            </div>

            <SocialMedias />
        </Section>
    )
}