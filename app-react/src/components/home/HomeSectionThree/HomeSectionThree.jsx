import React from "react";
import Login from "../../dashboard/shared/LoginForm/LoginForm";
import {
  Segment,
  Container,
  Header,
  Grid
} from "semantic-ui-react";

const HomeSectionThree = () => {
  return (
    <Segment id="login" style={{ padding: "8em 0em" }} vertical>
      <Container text inverted>
        <Header as="h3" style={{ fontSize: "2em" }} textAlign="left">
          You can login with email and password
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <Login />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default HomeSectionThree;
