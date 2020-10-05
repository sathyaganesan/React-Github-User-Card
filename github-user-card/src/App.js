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
      gitusers: ""
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


  render() {
    return (
      <div>
        <UserCompo userAttr={this.state.gitusers} />
        <FollowerCompo followAttr={this.state.gitfollowers} />
      </div>
    );
  }
}

export default App;
