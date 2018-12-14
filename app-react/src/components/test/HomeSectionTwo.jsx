import React from "react";
import { Segment, Grid, Header, Image} from "semantic-ui-react";

const HomeSectionTwo = () => {
  return (
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Local business thrive through the Web"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              The Wall Street Journal
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I never thought that I could have my own Site on the Web."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/icons/man.svg" />
              <b>Marcos</b> Barkery
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomeSectionTwo;
