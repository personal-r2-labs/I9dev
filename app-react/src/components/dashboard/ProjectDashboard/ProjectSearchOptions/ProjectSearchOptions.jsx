import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

const ProjectSearchOption = props => (
  <Form>
    <Form.Group inline>
      <Form.Radio
        label="Title"
        name="radioGroup"
        option="title"
        checked={props.checked === 'title'}
        onChange={props.changed}
      />
      <Form.Radio
        label="Category"
        name="radioGroup"
        option="category"
        checked={props.checked === 'category'}
        onChange={props.changed}
      />
      <Form.Radio
        label="Description"
        name="radioGroup"
        option="description"
        checked={props.checked === 'description'}
        onChange={props.changed}
      />
    </Form.Group>
  </Form>
);

export default ProjectSearchOption;
