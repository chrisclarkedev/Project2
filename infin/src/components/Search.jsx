import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

export class Search extends Component {
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
    };
  }
  getHero = async (e) => {
    e.preventDefault();
    const charName = e.target.elements.charName.value;
    // await axios
    //   .get(
    //     `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/search/${charName}`
    //   )
    await axios
      .get(
        `https://www.superheroapi.com/api.php/${process.env.REACT_APP_SECRET_KEY}/search/${charName}`
      )
      .then((res) => {
        const name = res.data.results['0'].name;
        const realName = res.data.results['0'].biography['full-name'];
        const image = res.data.results['0'].image;
        const height = res.data.results['0'].appearance.height['0'];
        const weight = res.data.results['0'].appearance.weight['0'];
        const appearance = res.data.results['0'].biography['first-appearance'];
        const group = res.data.results['0'].connections['group-affiliation'];

        this.setState({ image: image.url });
        this.setState({ name: name });
        this.setState({ realName: realName });
        this.setState({ height: height });
        this.setState({ weight: weight });
        this.setState({ appearance: appearance });
        this.setState({ group: group });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <>
        <Form getHero={this.getHero} />
        <br></br>
        <div className="whole_card">
          <div className="card result-card">
            <div className="upper">
              <img src={this.state.image} />
            </div>
            <h2>{this.state.name}</h2>
            <h3>Real Name: {this.state.realName}</h3>
            <h4>
              Height: {this.state.height} &nbsp; &nbsp; &nbsp;Weight:{' '}
              {this.state.weight}
            </h4>
            <h5>First Appearance: {this.state.appearance}</h5>
            <h6>Group Affiliation: {this.state.group}</h6>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default Search;
