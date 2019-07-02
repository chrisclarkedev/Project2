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
      realName: '',
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
        const realName = res.data.results["0"].biography["full-name"];

        // console.log(name);
        this.setState({ name: name })
        this.setState({ image: image.url })
        this.setState({ nickName: realName })
      }).catch(err => {

      })

  }

  render() {

    return (
      <div>
        <Form getHero={this.getHero} />
        <section id="cardsection">
          <div className="charname">
            <p>Name:    {this.state.name}
              <br></br>
              Real Name:    {this.state.nickName}</p>
            <img src={this.state.image} />
          </div>

        </section>
      </div>
    );
  }
}

export default Search;







