import React from 'react';
import Form from './Form';
import axios from 'axios';
const apiKey = '10214393741373662';



class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      realName: '',
      image: '',
      height: '',
      weight: '',
      appearance: '',
      group: '',
    }
  }
  getHero = async (e) => {
    e.preventDefault();
    const charName = e.target.elements.charName.value;
    await axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/search/${charName}`)
      .then((res) => {
        // console.log(res.data.results["0"].name);
        const name = res.data.results["0"].name; //characters name
        const realName = res.data.results["0"].biography["full-name"]; //characters real name
        const image = res.data.results["0"].image; //characters image
        const height = res.data.results["0"].appearance.height["0"];//characters height
        const weight = res.data.results["0"].appearance.weight["0"];
        const appearance = res.data.results["0"].biography["first-appearance"];
        const group = res.data.results["0"].connections["group-affiliation"];
        // console.log(group);

        // console.log(name);
        this.setState({ image: image.url })
        this.setState({ name: name })
        this.setState({ realName: realName })
        this.setState({ height: height })
        this.setState({ weight: weight })
        this.setState({ appearance: appearance })
        this.setState({ group: group })
      }).catch(err => {

      })

  }

  render() {

    return (
      <div>
        <Form getHero={this.getHero} />
        <br></br>
        <div class="card">
          <div class="upper">
            <img src={this.state.image} />
          </div>
          <h2>{this.state.name}</h2>
          <h3>Real Name: {this.state.realName}</h3>
          <h4>Height: {this.state.height} &nbsp;  &nbsp; &nbsp;Weight: {this.state.weight}</h4>
          <h5>First Apperance: {this.state.appearance}</h5>
          <h6>Group Affiliaion: {this.state.group}</h6>
        </div>
      </div>
    );
  }
}

export default Search;







