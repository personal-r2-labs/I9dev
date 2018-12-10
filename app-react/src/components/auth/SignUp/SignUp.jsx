import React from 'react'
import { Tab, Form, Button, Icon, Grid, Divider  } from 'semantic-ui-react'

import '../auth.css'

const panes = [
  { menuItem: 'Developer', render: () => 
    <Tab.Pane>
      <Grid columns='equal'>
        <Grid.Column>
          <Form action='http://localhost:5000/api/signup/dev' method='POST' size='large'>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Full name' name='name' placeholder='Full name' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Contact Email' name='email' placeholder='Email' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Password' name='password' placeholder='Password' />
            </Form.Group>
            <Button type="submit" icon labelPosition='right'>
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

  { menuItem: 'Enterprising', render: () => 
    <Tab.Pane>
      <Grid columns='equal'>
        <Grid.Column>
          <Form action='http://localhost:5000/api/signup/ent' method='POST' size='large'>
            <Form.Group widths='equal'>
              <Form.Input fluid name='name' label='Full name' placeholder='Full name' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid name='email' label='Contact Email' placeholder='Email' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid name='password' label='Password' placeholder='Password' />
            </Form.Group>
            <Button type="submit" icon labelPosition='right'>
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
          <Button id="Signup-Column-Item" color='linkedin'>
            <Icon name='linkedin' /> LinkedIn
          </Button>
        </Grid.Column>
      </Grid>
    </Tab.Pane> },
]

const SignUp = () => <Tab panes={panes} />

export default SignUp;