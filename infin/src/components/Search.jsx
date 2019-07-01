import React from 'react';
import Form from './Form';
import axios from 'axios';
const apiKey = '10214393741373662';



class Search extends React.Component {
  getHero = (e) => {
    e.preventDefault();
    const charName = e.target.elements.charName.value;
    axios.get(`https://superheroapi.com/api/${apiKey}/search/${charName}`)
      .then((res) => {
        console.log(res);
      })
  }

  render() {

    return (
      <Form getHero={this.getHero} />
    );
  }
}

export default Search;

