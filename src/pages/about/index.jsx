import Section from "../../components/section";

export default function AboutMe(){
    return(
        <Section title = 'Sobre mim'>
            <div className = 'flex'>
                <div>
                    <div className = 'flex flex-col ga-2'>
                        <label> João Vitor da Cunha Souza</label>
                        <label> Web Developer</label>
                        <label>Formação: Bacharelado em Sistemas de informação</label>
                        <label> 31/10/2002 -20 anos-</label>
                    </div>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aut debitis,
                        sit nemo odio dolorum numquam dignissimos ab dicta
                        veniam, nihil iure facere natus! Optio, officiis? Numquam eius a asperiores.
                    </p>
                </div>
            </div>
        </Section>
    )
}