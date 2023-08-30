
import Form from '../../components/form';
import Input from '../../components/input';
import Section from '../../components/section';
import TextArea from '../../components/textarea';
import { IoIosRocket } from 'react-icons/io';
import {MdNotes} from 'react-icons/md';

import { useContext } from 'react';
import {FormContext} from '../../context/FormContext';
import sendEmail from '../../services/emailjs';
import { modalContext } from '../../context/ModalContext';
import Title from '../../components/title';

export default function Contact(){

    const {formStates, buildActions: actions} = useContext(FormContext);
    const {modalStates, actions:modalAction} = useContext(modalContext);

    return(
        <Section 
            
        >
            
            <div className='w-full h-full flex items-center flex-col justify-center'>
                <Title 
                    text = 'Vamos Trabalhar Juntos!'
                    icon = {IoIosRocket}
                />

                <div className = 'flex flex-col gap-3 mt-6 mb-6 md:flex-row md:items-center md:gap-10'>
                    <div className = 'w-full'>
                        <div className = 'shadow-[-20px_20px_1px_1px_#070E10] w-[80%] border rounded-lg border-ligth p-6 px-4 flex w-full justify-around flex-col gap-2'>
                            <MdNotes className = 'text-md md:text-2xl'/>
                     
                            <p className = 'text-sm md:text-lg'>Estou em busca do meu primeiro emprego como desenvolvedor de software, remoto ou presencial</p>
                          
                            <p className = 'text-sm md:text-lg'>Estou aberto para <strong>freelances</strong> ou <strong>trabalhos voluntários</strong> </p>
                            <p className = 'text-sm md:text-lg'>Caso esteja interessando, Mande uma mensagem através deste formulário, será um prazer trocar uma idéia</p>
                        </div>
                    </div>
                    <Form
                        submit={ async(e) => {
                            actions.setRequestStatus(true)
                            const res = await sendEmail(e,formStates);
                            actions.setRequestStatus(false)
                            if(res.status == 200) {
                                console.log(res)
                                return modalAction.openModal('Obrigado pela iniciativa!', `${formStates.name}, Fico contente pelo o seu interresse. Muito em breve irei lhe retornar com uma mensagem através do email informado :)`)
                            }
                            else {
                                console.log(res)
                                return modalAction.openModal()
                            }
                            
                        }}
                        nameButton={'Enviar'}
                    >
                        <Input.Root>
                            <Input.Label label = {'Seu Nome'}/>
                            <Input.Main
                                value={formStates.name}
                                placeholder={'nome'}
                                isChange={(e) => actions.setName(e.target.value)}

                            />
                        </Input.Root>
                        <Input.Root>
                            <Input.Label label = {'Insira seu melhor email'}/>
                            <Input.Main
                                value = {formStates.email}
                                placeholder={'email'}
                                isChange={(e) => actions.setEmail(e.target.value)}
                                type={'text'}
                            />
                        </Input.Root>
                        <TextArea
                            value = {formStates.message}
                            isChange={(e) => actions.setMessage(e.target.value)}
                            title = 'Escreva uma mensagem'
                        />
                    </Form>
                </div>
               
            </div>
        </Section>
    )
}