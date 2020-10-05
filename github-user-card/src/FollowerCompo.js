import React from 'react';

const FollowerCompo = (props) => {
    return (
        <div>
            <h2>Followers</h2>
            {props.followAttr.map((item) => {
                return (
                    <div className = "follower-div">
                        <div className = "user-cont-div">
                            <h3>Login Name: {item.login}</h3> 
                            <p>Github Link:<a href = {item.html_url}>{item.html_url}</a> </p> 
                            <p>Type: {item.type}</p> 
                        </div>
                        <div>
                            <img src={item.avatar_url}/>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default FollowerCompo;