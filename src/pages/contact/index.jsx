import Form from '../../components/form';
import Input from '../../components/input';
import Section from '../../components/section';
import TextArea from '../../components/textarea';
import { IoIosRocket } from 'react-icons/io';
import {MdNotes} from 'react-icons/md';

export default function Contact(){
    return(
        <Section 
            title= 'Vamos trabalhar juntos'
            icon = {IoIosRocket}
        >

            <div className='flex justify-around items-center w-[100%] h-full mt-5' >

                <div className = 'w-1/2 flex justify-center'>
                    <div className = ' shadow-[-30px_20px_1px_1px_#070E10] w-[80%] border rounded-lg border-ligth p-6 px-8 flex justify-around flex-col gap-2'>
                        
                        <MdNotes className = 'text-2xl'/>
                        
                        <p>Estou em busca do meu primeiro emprego como desenvolvedor de software, remoto ou presencial</p>
                        <p>Estou aberto para <strong>freelances</strong> ou <strong>trabalhos voluntários</strong> </p>
                        <p>Caso esteja interessando, Mande uma mensagem através deste formulário, será um prazer trocar uma idéia</p>

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
        </Section>
    )
}