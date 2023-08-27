
import Form from '../../components/form';
import Input from '../../components/input';
import Section from '../../components/section';
import TextArea from '../../components/textarea';
import { IoIosRocket } from 'react-icons/io';
import {MdNotes} from 'react-icons/md';
import Balance from 'react-wrap-balancer'
export default function Contact(){
    return(
        <Section 
            title= 'Vamos trabalhar juntos'
            icon = {IoIosRocket}
        >
            <div className='w-full h-full'>

                <div className = 'flex flex-col gap-3 mt-6 mb-6'>
                    <div className = 'w-full'>
                        <div className = 'shadow-[-20px_20px_1px_1px_#070E10] w-[80%] border rounded-lg border-ligth p-6 px-4 flex w-full justify-around flex-col gap-2'>
                    
                            <MdNotes className = 'text-md'/>
                    
                            <Balance>
                                <p className = 'text-sm'>Estou em busca do meu primeiro emprego como desenvolvedor de software, remoto ou presencial</p>
                            </Balance>
                            <p className = 'text-sm'>Estou aberto para <strong>freelances</strong> ou <strong>trabalhos voluntários</strong> </p>
                            <p className = 'text-sm'>Caso esteja interessando, Mande uma mensagem através deste formulário, será um prazer trocar uma idéia</p>
                        </div>
                    </div>
                    <Form
                        submit={() => {}}
                        nameButton={'Enviar'}
                    >
                        <Input.Root>
                            <Input.Label label = {'Seu Nome'}/>
                            <Input.Main
                                placeholder={'Insira seu melhor email'}
                                isChange={() => {}}
                                type={'email'}
                            />
                        </Input.Root>
                        <Input.Root>
                            <Input.Label label = {'Insira seu melhor email'}/>
                            <Input.Main
                                placeholder={'Insira o seu nome'}
                                isChange={() => {}}
                                type={'text'}
                            />
                        </Input.Root>
                        <TextArea title = 'Escreva uma mensagem'/>
                    </Form>
                </div>
               
            </div>
        </Section>
    )
}