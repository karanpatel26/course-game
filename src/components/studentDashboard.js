import React, { Component } from 'react';
import Show from './show';
import Login from './login';
import Idscoreboard from './idscoreboard';
import './studentDashboard.css'

class StudentDashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show_challenge : false,
        show_scoreboard : false,
        show_login : false,
        show_review : false,
        courses: [
            {
                name: 'Data structures',
                prof: 'ahflishdv'
            },
            {
                name: 'HPC',
                prof: 'ahflishdv'
            },
            {
                name: 'Comp Fin',
                prof: 'ahflishdv'
            },
            
        ]
      };
      this.id = props.id;
      this.level = props.level;
      this.showChallenges = this.showChallenges.bind(this);
      this.showScoreboard = this.showScoreboard.bind(this);
      this.logout = this.logout.bind(this);
    }

    showScoreboard(){
        this.setState({
            show_scoreboard : true
        });
        return ;
    }

    showChallenges(){
        this.setState({
            show_challenge : true
          });
        return;
    }

    logout(){
        this.setState({
            show_login : true
        });
        return ;
    }

    render() {
        if(this.state.show_challenge === true){
            return ( <Show level={this.level} id={this.id}/> );
        }else if(this.state.show_scoreboard === true){
            return (
                <Idscoreboard id={this.id} level={this.level}/>
            ); 
        }else if(this.state.showl_ogin === true){
            return (
                <Login />
            );
        }else if(this.state.show_review === true){
            return ;
        }else{
            return (
                <div id='full'>
                    <div>
                        <ul id='top'>
                            <li id='s1'><h1>Dashboard</h1></li>
                            <li id='s2'>
                                <p id='p1'>Karan Patel</p>
                                <a id='p2' href='/' onClick={this.logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <div id='ma'>
                        <div id='ce'>
                            <h2>Courses</h2>
                            <hr/>
                            {this.state.courses.map((c, index) => (
                            <div key={index} className='co'>
                                <h2>{c.name}</h2>
                                <h3>Prof : {c.prof}</h3>
                            </div>))}
                        </div>
                        <div id='re'>
                            <div>
                                <ul>
                                    <li>Rank=5</li>
                                    <li>Level=6</li>
                                </ul>
                            </div>
                            <button onClick={this.showChallenges}>Show Challenges</button><br/>
                            <button onClick={this.showScoreboard}>Show Scoreboard</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
  }
  
  export default StudentDashboard;
