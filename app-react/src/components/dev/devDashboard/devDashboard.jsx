import React, {Component} from 'react'
import DevProfile from '../devProfile/devProfile'
import DevData from '../../../data/devData.json'

class DevDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devProfile: DevData
        }
        console.log(this.state.devProfile)
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
