import React from 'react';
import Form from './Form';
import axios from 'axios';
const apiKey = '10214393741373662';


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      nickName: '',
      pwrStats: [],
    }
  }
  getHero = async (e) => {
    e.preventDefault();
    const charName = e.target.elements.charName.value;
    await axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/search/${charName}`)
      .then((res) => {
        // console.log(res.data.results["0"].name);
        const name = res.data.results["0"].name;
        const image = res.data.results["0"].image;
        const nickName = res.data.results["0"].biography["full-name"];
        const pwrStats = res.data.results["0"].powerstats;
        // console.log(name);
        this.setState({ name: name })
        this.setState({ image: image.url })
        this.setState({ nickName: nickName })
        this.setState({ pwrStats: pwrStats.arr })
      }).catch(err => {

      })

  }

  render() {

    return (
      <div>
        <Form getHero={this.getHero} />
        <div className="charname">
          <p>Name:{this.state.name}</p>
        </div>
        <img src={this.state.image} />
        <p>{this.state.nickName}</p>
        <p>{this.state.pwrStats}</p>
      </div>
    );
  }
}

export default Search;







