import React from 'react';

const Form = props => (
  <form onSubmit={props.getHero}>
    <input type="text" />
    <button>Search</button>
  </form>

);

export default Form;