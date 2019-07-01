import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getHero}>
      <input style={{ margin: "20px auto", display: "block" }} type="text" name="charName" />
      <button>Submit</button>
    </form>

  );
}
export default Form;