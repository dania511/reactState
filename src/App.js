import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
 this.state = {
   person:{
        fullName: "Astra",
        bio: " Astra hacked French aviation computers and steals the weapons technology-related data. This hacker did not steal the data but kept sending it to different countries. Astra hacker was caught in 2008 and sentenced to 6 years in prison.",
        imgSrc:"https://www.techmaniya.in/wp-content/uploads/2020/05/astra-hacker.jpg",
        profession:"A Computer Geek and one of the most famous name in the universe of the hacking world.",
          },
   shows: true,
             };
                    }


componentDidMount(){
  console.log("componentDidMount()");
  this.setState({
    intervall:setInterval(() => {
      this.setState({timer:this.state.timer +1});
                                }, 1000),
               });
}
componentDidUpdate(){
  console.log("componentDidUpdate()")
}
handleClick(){
  this.state.shows ? this.setState({shows:false}):this.setState({shows:true})
  console.log(this.state.shows)

}                    
 
render() {
  console.log("render()")
  const styleObject={width:"480px",height:"280px" , borderRadius: "10px", marginTop:"0px"}
  return (
    <div>
      <nav>
      <h1>{this.state.person.fullName}</h1>
      </nav>
      <section>
      <img src={this.state.person.imgSrc} style={styleObject} alt='Astra'/><br></br>
       <button onClick={()=>this.handleClick()}>Show more about Astra </button>
      {this.state.shows ? <h2>{this.state.person.profession}</h2>: null}
      {this.state.shows ? <p>{this.state.person.bio}</p> : null}
      </section>
    </div>

  )
}
}


export default App;
