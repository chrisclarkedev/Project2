import React from 'react';

const Form = (props) => {

  const showCard = () => {
    document.querySelector('.result-card').classList.add('show-result-card');
  }

  return (
    <div className="form-search">
      <form onSubmit={props.getHero}>
        <input style={{ margin: "20px auto", display: "block" }} type="text" name="charName" />
        <button onClick={showCard}>Submit</button>
      </form>
    </div>
  );
}
export default Form;