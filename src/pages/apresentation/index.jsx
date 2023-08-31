import Section from "../../components/section";
import Button from '../../components/button';
import SocialMedias from './socialMedias.jsx';
import logo from '../../assets/logo.png';
import Balancer from 'react-wrap-balancer'
import curriculo from '../../assets/documents/curriculo-joao-souza.pdf';
export default function Apresentation(){
    return(
        <Section>

            <div className = ' h-full flex flex-col justify-center gap-10 sm:flex-row-reverse sm:items-center'>

                <div className = ' w-300px flex justify-center sm:w-full'>
                    <img
                        src={logo}
                        alt="João Souza logo"
                        className = 'w-[50%] object-contain flex justify-center lg:w-[70%]'
                    />
                </div>
                
                <div className = 'w-full'>
                    <div className = 'w-full flex flex-col gap-4'>
                        <h1 className = ' text-primary font-bold text-3xl text-center md:text-3xl md:text-start lg:text-6xl'>Olá, Bem Vindo!</h1>
                        <p className = 'text-lg text-center md:text-start lg:text-xl'>
                            <Balancer>
                                Conheça meu trabalho como desenvolvedor web, acompanhe meus últimos projetos através
                                deste web App desenvolvido por mim para ser o meu <strong>portfólio</strong>
                            </Balancer>
                        </p>
                    </div>

                    <div className = 'flex gap-5 mt-4 justify-center w-full md:justify-start'>
                        <Button.Root>
                            <a href={curriculo} download = 'currículo-joao-souza.pdf' target="_blank"><Button.Label color = 'light' label = 'Baixar CV' isBold = {true}/></a>
                        </Button.Root>
                        <Button.Root style = 'leaked' action = {() => window.open('https://github.com/JoaoSouz4', '_blank')}>
                            <Button.Label color = 'primary' label = 'Git Hub' />
                        </Button.Root>
                    </div>
                </div>
                
            </div>

            <SocialMedias />
        </Section>
    )
}