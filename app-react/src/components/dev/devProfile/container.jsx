import React from 'react';
import DevProfile from './devProfile';
import DevCardInfo from './devCardInfo';
import DevProjects from './devProjects';

const Container = (props) => {
    return(
			<div id="dashboard">
				<DevProfile photoPath={props.photoPath} skills={props.skills} />
					<div className="ui internally celled grid">
						<div className="row">
							<DevCardInfo field={props.field} name={props.name}/>
						</div>
						<div className="row">
							<DevProjects />
						</div>
				</div>
			</div>
    )
};

export default Container;