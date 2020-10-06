import React from 'react';

const UserCompo = (props) => {
    return (
        <div className="user-div">
            <div className = "user-cont-div">
                <h4>Git User Name: {props.userAttr.name}</h4>
               
                <p>Github Login:  <a href = {props.userAttr.html_url}> {props.userAttr.html_url}</a></p>
                <p>Location: {props.userAttr.location}</p>
                <p>Followers: {props.userAttr.followers}</p>
                <p>Following: {props.userAttr.following}</p>
            </div>
            <div>
                <img src = {props.userAttr.avatar_url } alt = "Image"/>
            </div>
        </div>
    );
}

export default UserCompo;