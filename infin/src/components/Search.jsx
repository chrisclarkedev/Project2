import React from 'react';
import Form from './Form';


class Search extends React.Component {
  getHero = (e) => {
    e.preventDefault();
    console.log("working");
  }
  render() {

    return (
      <Form getHero={this.getHero} />
    );
  }
}


export default Search;
