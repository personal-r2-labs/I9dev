import React from 'react'
import { Tab, Form, Input, Button, Icon  } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Developer', render: () => <Tab.Pane>
    <Form action=''>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Contact Email' placeholder='Email' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Linkedin Page' placeholder='Linkedin URL' />
      </Form.Group>
      <Form.Field inline>
        <label>GitHub ID</label>
        <Input placeholder='First name' />
      </Form.Field>
      <Form.TextArea label='Description' placeholder='Tell us more about you...' />
      <Button type="submit" icon labelPosition='right'>
      Submit
      <Icon name='save' />
    </Button>
    </Form>
  </Tab.Pane> },

  { menuItem: 'Entrepreneurship', render: () => <Tab.Pane>
    <div>
    <Form action=''>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Contact Email' placeholder='Email' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Linkedin Page' placeholder='Linkedin URL' />
      </Form.Group>
      <Form.TextArea label='Description' placeholder='Tell us more about you...' />
      <Button type="submit" icon labelPosition='right'>
      Submit
      <Icon name='save' />
    </Button>
    </Form>
    </div>
  </Tab.Pane> },
]

const TabToggle = () => <Tab panes={panes} />

export default TabToggle;