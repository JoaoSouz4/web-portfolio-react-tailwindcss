
import Form from './components/form/index';
import Input from '../../components/input'
import TextArea from '../../components/textarea';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import sendEmail from '../../services/emailjs';
import { modalContext } from '../../context/ModalContext';
import { AlertContext } from '../../context/AlertContext';
import { Article } from './components/article';
import Section from '../../components/section';

export default function Contact() {

    const { formStates, buildActions: actions } = useContext(FormContext);
    const { actions: modalAction } = useContext(modalContext);
    const { buildActions: alertAction } = useContext(AlertContext);

    return (

        <div className='flex flex-col md:flex-row md:gap-4 md:justify-between px-4' >
            <Article />
            <Form
                submit={async (e) => {
                    actions.setRequestStatus(true)
                    const res = await sendEmail(e, formStates);
                    actions.setRequestStatus(false)
                    if (res.status == 200) {
                        actions.clear();
                        return modalAction.openModal('Obrigado pela iniciativa!', `${formStates.name}, Fico contente pelo o seu interresse. Muito em breve irei lhe retornar com uma mensagem através do email informado :)`)
                    }
                    else {
                        return alertAction.openAlert('warning', res.message)
                    }
                }}
                nameButton={'Enviar'}
            >
                <Input.Root>
                    <Input.Label label={'Seu Nome'} />
                    <Input.Main
                        value={formStates.name}
                        isChange={(e) => actions.setName(e.target.value)}
                    />
                </Input.Root>
                <Input.Root>
                    <Input.Label label={'Insira seu melhor email'} />
                    <Input.Main
                        value={formStates.email}
                        isChange={(e) => actions.setEmail(e.target.value)}
                        type={'text'}
                    />
                </Input.Root>
                <TextArea
                    value={formStates.message}
                    isChange={(e) => actions.setMessage(e.target.value)}
                    title='Escreva uma mensagem'
                />
            </Form>
        </div>

    )
}