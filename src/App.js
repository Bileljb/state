import React from 'react';
import './App.css';
import pic from './img.jpg'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Person: {
        fullName: "Bilel Jabrane",
        bio: "Im a Web development Student at GoMyCode",
        imgsrc: { pic },
        profession: "Web developer"
      },
      b: false,
      count : 0
    }
  }

  componentDidMount(){

    setInterval(()=> {
      this.setState({ count : this.state.count+1})
    }, 1000)
    // const Counter=()=>{ this.setState({ count : <div>{this.state.count+1, 1000}</div>})}
    
  }
 



  render() {
    return (
      <div>
        <button onClick={()=>this.setState({ b: !this.state.b })}>Hide/Show</button>
        {
          this.state.b ? "" :
            <div>
              <h1>{this.state.Person.fullName}</h1>
              <h3>{this.state.Person.bio}</h3>
              <h2>{this.state.Person.profession}</h2>
              <h1>{this.state.count}</h1>
              <img height='300px' width='200' src={pic}></img>
            </div>

        }


      </div>
    )
  }
}

export default App;
