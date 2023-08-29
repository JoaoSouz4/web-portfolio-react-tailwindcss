import Card from "../../components/card";
import Section from "../../components/section";
import projects from "../../data/projects";
import {AiFillFire} from 'react-icons/ai';
import Slider from '../../components/slider';

export default function MyProjects(){
    return(
        
        <Section
            title = 'Meus Projetos'
            icon = {AiFillFire}
        >
            <Slider.Root>
                    {
                    projects.map( project => {
                        return (
                            <Card.Root key = {project.id}>
                                <Card.Image img = {project.img} />
                                <Card.Title title={project.title} />
                                <Card.Description text = {project.description} />
                                <Card.Stacks 
                                    listFrontEnd={project.stacks.frontEnd} 
                                    listBackEnd={project.stacks.backEnd}
                                />
                                <Card.Actions>
                                    <Card.Action
                                        style = 'leaked'
                                        color = 'primary'
                                        label = 'GitHub'
                                        action = {() => window.open(project.url.gitHub, '_blank')}
                                    />
                                    { project.url.app ? 
                                        <Card.Action
                                            
                                            label = 'Ver App'
                                            action = {() => window.open(project.url.app)}
                                        />
                                    :
                                        <Card.Action
                                            label={'Linkedin'}
                                            action = {() => window.open(project.url.linkedin)}
                                        />
                                    }
                                </Card.Actions>
                            </Card.Root>
                        )
                    })}
                    </Slider.Root>

        </Section>
                
    )}
                
        