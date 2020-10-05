import React from 'react';

const UserCompo = (props) => {
    return (
        <div>
            <h2> User Component </h2>
            <h3>{props.userAttr.name}</h3>
            <h3>{props.userAttr.login}</h3>
            <h3>{props.userAttr.location}</h3>
        </div>
    );
}

export default UserCompo;