import React from "react";
import { Card, Image } from 'semantic-ui-react'


const ProjectResultCard = (props) => (
    <Card>
        <Card.Content>
            <Image avatar src={props.project.image}/>
        </Card.Content>
        <Card.Content header={props.project.title}/>
        <Card.Content description={props.project.description}/>
    </Card>

)

export default ProjectResultCard;