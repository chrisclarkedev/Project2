import React from 'react';

const Form = (props) => {

  const showCard = () => {
    document.querySelector('.result-card').classList.add('show-result-card');
  }

  return (
    <div className="form-search">
      <p>Search your favorite hero!</p>
      <form onSubmit={props.getHero}>
        <input type="text" name="charName" placeholder="Search Hero" />
        <button onClick={showCard}>Search</button>
      </form>
    </div>
  );
}
export default Form;