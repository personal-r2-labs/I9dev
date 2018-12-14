import React from "react";
import { Container, Header, Icon, Button} from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as="h1"
        content="Helping others is the best project "
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
      />
      <Header
        as="h2"
        content="Do you have an idea and you need a hand?"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      <Button primary size="huge" as={Link} to="/signup">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool
  };

  export default HomepageHeading;