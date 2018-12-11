import React, { Component } from 'react'
import { Tab, Form, Button, Icon, Grid, Divider, Container  } from 'semantic-ui-react'
import '../auth.css'
import TestNavBar from '../../dashboard/shared/NavBar/testeNavBar'

class SignUp extends Component {
  state = {};
  render() {

    const panes = [
      { menuItem: 'Developer', render: () => 
        <Tab.Pane>
          <Grid columns='equal'>
            <Grid.Column>
              <Form size='large' action=''>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Full name' placeholder='Full name' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Contact Email' placeholder='Email' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' placeholder='Password' />
                </Form.Group>
                <Button type="submit" icon labelPosition='right' primary>
                  Submit
                <Icon name='save' />
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width='1'>
              <Divider vertical>Or</Divider>
            </Grid.Column>
            <Grid.Column id="Signup-Column" verticalAlign="middle">
              <Button id="Signup-Column-Item" color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button id="Signup-Column-Item" color='github'>
                <Icon name='github' /> GitHub
              </Button>
              <Button id="Signup-Column-Item" color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Grid.Column>
          </Grid>
        </Tab.Pane> },
    
      { menuItem: 'Enteprenurship', render: () => 
        <Tab.Pane>
          <Grid columns='equal'>
            <Grid.Column>
              <Form size='large' action=''>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Full name' placeholder='Full name' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Contact Email' placeholder='Email' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' placeholder='Password' />
                </Form.Group>
                <Button type="submit" icon labelPosition='right' primary>
                  Submit
                  <Icon name='save' />
                </Button>
              </Form>
            </Grid.Column>
              <Grid.Column width={1}>
                <Divider vertical>Or</Divider>
            </Grid.Column>
            <Grid.Column id="Signup-Column" verticalAlign="middle">
              <Button id="Signup-Column-Item" color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button id="Signup-Column-Item" color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Grid.Column>
          </Grid>
        </Tab.Pane> },
    ]
    return(
      <div style={{minWidth:'390px'}}>
      <TestNavBar />
      <Tab panes={panes} />
      </div>
    )
  }
}

export default SignUp;