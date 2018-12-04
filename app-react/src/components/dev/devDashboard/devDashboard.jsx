import React, {Component} from 'react'
import DevProfile from '../devProfile/devProfile'

class DevDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoPath: "/images/foto-de-perfil-para-trabalho.jpg",
            name: "Lorem Ipsum",
            email: "lorem@ipsum",
            github: "lorem/LoremIpsum",
			linkedin: "LinkedIn/LoremIpsum",
			skills: "JavaScript, Node, React, Mongo and Express",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        }
    }

    render() {
			// const {photoPath, name, email, github, linkedin, skills, description} = this.state
        return(
            <section id="section-devDashBoard">
							<div className="devDashBoard">
								<DevProfile profile={this.state.profile[0]} />
							</div>
							<div>
								
							</div>
						</section>
        )
    }
}

export default DevDashBoard;
