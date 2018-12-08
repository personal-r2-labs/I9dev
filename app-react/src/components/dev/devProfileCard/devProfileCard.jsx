import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react'

const DevProfileCard = (props) => {
    return(
    <Card id="card-profile" className="shadow">
        <Image src={props.photoPath} />
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
        <Icon name='user' />
        22 Friends
        </a>
        </Card.Content>
    </Card>
    )
}

export default DevProfileCard;