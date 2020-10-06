import React from 'react';
import axios from 'axios';
import UserCompo from './UserCompo';
import FollowerCompo from './FollowerCompo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitfollowers: [],
      gitusers: "",
      myFollower: ""
    };
  }

  componentWillMount() {
    axios
      .get('https://api.github.com/users/sathyaganesan')
      .then((res) => { 
        this.setState({ gitusers: res.data })
        console.log(this.state.gitusers);
      })
      .catch((err) => { 
        console.log(err);
      });
    
    axios
      .get(`https://api.github.com/users/sathyaganesan/followers`)
      .then((res) => { 
        this.setState({ gitfollowers: res.data })
        console.log(this.state.gitfollowers);
      })
      .catch((err) => { 
        console.log(err);
            }); 
  }

  changeHandler = (e) => {
    this.setState({ ...this.state, myFollower: e.target.value });
  };

  formClick = () => { 
    axios
      .get(`https://api.github.com/users/sathyaganesan/followers`)
      .then((res) => {
        this.setState({ ...this.state, gitfollowers: res.data, myFollower: "" });
        console.log(res.data[0].login);
      })
      .catch((err) => {
        console.log(err);
    })
  };


  render() {
    return (
      <div className = "main-div">
        <h1>Github User finding App</h1>
        <UserCompo userAttr={this.state.gitusers} />
        <div>
          <input
            type="text"
            name="followerName"
            placeholder = "Follower Name"
            onChange= {this.changeHandler}
            value = {this.state.myFollower}
          />
          <button onClick = {this.formClick}>Find</button>
        </div>
        <div>
          {this.state.gitfollowers.map((item) => {
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
            );
          })}
        </div>
        <FollowerCompo followAttr={this.state.gitfollowers} />
      </div>
    );
  }
}

export default App;
