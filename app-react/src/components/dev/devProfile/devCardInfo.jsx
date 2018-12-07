import React from 'react';

const DevCardInfo = (props) => {
    console.log('devCard', props)
    return(
        <div className="ten wide column devDashBoard-profile-margin">
            <h1>{props.name}</h1>
            <div className="ui list">
                <div className="item">
                    <i className="users icon"></i>
                        {props.field}
                </div>
                <div className="item">
                    <i className="marker icon"></i>
                    <div className="content">
                        New York, NY
                    </div>
                </div>
                <div className="item">
                    <i className="mail icon"></i>
                    <div className="content">
                        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                    </div>
                </div>
                <div className="item">
                    <i className="linkify icon"></i>
                    <div className="content">
                        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevCardInfo;