import React, { Component } from 'react';
import {Responsive, Visibility, Menu, Segment, Container, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomeHeader from './HomeHeader';
import './homeHeader.css'

class HomeNavContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment id="backgroundMainImage"
              textAlign='center'
              inverted
              style={{ minHeight: 700, padding: '0em'}}
              vertical
            >
              <Menu
                id="navBg"
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Work</Menu.Item>
                  <Menu.Item as='a'>Company</Menu.Item>
                  <Menu.Item as='a'>Careers</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomeHeader />
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
  HomeNavContainer.propTypes = {
    children: PropTypes.node,
  }

export default HomeNavContainer;