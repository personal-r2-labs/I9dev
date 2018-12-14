import React from "react";
import { Segment, Grid, Header, List, Container } from "semantic-ui-react";

const HomeSectionFour = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Technologies Used</List.Item>
                <List.Item as="a">Latest News</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Support</List.Item>
                <List.Item as="a">User FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Company Location
              </Header>
              <span>Based in São Paulo</span>
              <p>Brazil</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default HomeSectionFour;
