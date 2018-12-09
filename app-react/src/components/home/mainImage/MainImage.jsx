import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import './backgroundImage.css';

const MainImage = () => {
    return(
        <section className="backgroundMainImage">
            <Header id="headerH1" inverted>We believe that every business must be online</Header>
            <Header inverted id="headerh2" className="shadow">See what we can do for you</Header>
            <Button size="huge" primary>Get start!</Button>
        </section>
    )
}

export default MainImage;