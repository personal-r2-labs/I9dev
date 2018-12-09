import React from 'react';
import { Form, Button, Icon, Header  } from 'semantic-ui-react'

const AddProject = () => {
  return (
    <Form action=''>
      <Header as='h2'>
        Publish a new Project
        <Header.Subheader>Provide the details of the project</Header.Subheader>
      </Header>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Project Name' placeholder='Project Name' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Category' placeholder='Category' />
      </Form.Group>
      <div class="three wide field">
        <label>Desired Delivery Date</label>
        <input type="date" name="dateExpire" placeholder="dd/mm/yyyy" />
      </div>
      <Form.TextArea label='Description' placeholder='Tell us about your project' />
        <Button type="submit" icon labelPosition='right'>
          Submit
        <Icon name='save' />
        </Button>
    </Form>
  );
};

export default AddProject;
