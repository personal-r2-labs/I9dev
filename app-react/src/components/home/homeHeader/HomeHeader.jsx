import React from 'react';
import { Header, Button, Container, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HomeHeader = ({ mobile }) => (
    <Container text>
    <Header
        as='h1'
        content='We Believe that every business must be online'
        inverted
        style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        }}
    />
    <Header
      as='h2'
      content='See what we can do for you'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomeHeader.propTypes = {
    mobile: PropTypes.bool,
}

export default HomeHeader;
