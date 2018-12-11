import React from "react";
import Login from "./LoginForm";
import {
  Segment,
  Container,
  Header,
  Grid,
  Button,
  Icon
} from "semantic-ui-react";

const HomeSectionThree = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text inverted>
        <Header
          id="#login"
          as="h3"
          style={{ fontSize: "2em" }}
          textAlign="center"
        >
          You can login with email and password or social medias, your
          choice!
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <Login />
          </Grid.Column>
          <Grid.Column width={15}>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="linkedin">
              <Icon name="linkedin" /> Linkedin
            </Button>
            <Button color="grey">
              <Icon name="github" /> GitHub
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default HomeSectionThree;
