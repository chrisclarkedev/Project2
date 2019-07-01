import React from 'react';
import Form from './Form';
import axios from 'axios';
const apiKey = '10214393741373662';



class Search extends React.Component {
  state = {
    name: null
  }
  getHero = async (e) => {
    e.preventDefault();
    const charName = e.target.elements.charName.value;
    await axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/search/${charName}`)
      .then((res) => {
        // console.log(res.data.results["0"].name);
        const name = res.data.results["0"].biography;
        console.log(name);
        this.setState({ name: name })
      }).catch(err => {

      })

  }

  render() {

    return (
      <Form getHero={this.getHero} />
      // <div>
      //   <p>The name is {this.state.name()}</p>
      // </div>
    );
  }
}

export default Search;

