import Card from "../../components/card";
import { CardTitle } from "../../components/card/CardTitle";
import Section from "../../components/section";
import projects from "../../data/projects";

export default function MyProjects(){
    return(
        <Section>
            <div className = 'flex gap-4 relative'>
                {
                    projects.map( project => {
                        return (
                            <Card.Root key = {project.id}>
                                <Card.Image img = {project.img} />
                                <Card.Title title={project.title} />
                                <Card.Description text = {project.description} />
                                <Card.Stacks listStacks={project.stacks} />
                                <Card.Actions>
                                    <Card.Action
                                        style = 'leaked'
                                        label = 'GitHub'
                                        action = {() => {alert('clicked')}}
                                    />
                                    <Card.Action
                                        label = 'Acesse'
                                        action = {() => {alert('clicked')}}
                                    />
                                </Card.Actions>
                            </Card.Root>
                        )
                    })
                }
            </div>
        </Section>
    )
}