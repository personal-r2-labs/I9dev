import React from "react";
import { Segment, Grid, Header, Image, Button} from "semantic-ui-react";
import ScrollableAnchor from 'react-scrollable-anchor'

const HomeSectionOne = () => {
  return (
    <Segment id='howitworks'style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Small Business and ONGs
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can help you find a Web Developer for your business to thrive, no matter how small your business is. There's no payment required!
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Increase your Dev Portfolio
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We welcome to all developers to improve their personal portfolio with projects that will benefit the ones that needs assistance.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/image-profile/perfil-resilencia.jpg"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomeSectionOne;
