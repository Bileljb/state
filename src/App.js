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
      b: false
    }
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
              <img height='300px' width='200' src={pic}></img>
            </div>

        }


      </div>
    )
  }
}

export default App;
