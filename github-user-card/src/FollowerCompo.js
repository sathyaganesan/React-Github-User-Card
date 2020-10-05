import React from 'react';

const FollowerCompo = (props) => {
    return (
        <div>
            <h2>Followers Component</h2>
            {props.followAttr.map((item) => {
                return (
                    <div>
                        <h3>{item.login}</h3> 
                        <p>{item.url}</p> 
                        <p>{item.type}</p> 
                    </div>
                )
            })}
            
        </div>
    );
}

export default FollowerCompo;