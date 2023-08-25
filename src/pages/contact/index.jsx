import Form from '../../components/form';
import Input from '../../components/input';
import Section from '../../components/section';
import TextArea from '../../components/textarea';

export default function Contact(){
    return(
        <Section title= 'Vamos trabalhar juntos'>
            <div className="w-full">
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

                    <TextArea />
                </Form>
            </div>
        </Section>
    )
}