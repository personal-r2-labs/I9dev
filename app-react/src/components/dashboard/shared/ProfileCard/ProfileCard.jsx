import React from 'react';
import {Card, Image, Icon, Grid, Segment, List} from 'semantic-ui-react'

const ProfileCard = (props) => {
    return(
        <Grid.Column width={4}>
          <Segment>
            <Card fluid>
                <Image src='/images/image-profile/foto-perfil-psicologo.jpg' />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Fullstack Web developer</span>
                    </Card.Meta>
                    <Card.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Icon name='user' /> 22 Friends
                 </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
    )
}

export default ProfileCard;