import React from 'react';
import HeroSearchimg from './images/search_hero.png';
import Search from './Search';

export default function HeroSearch() {
  return (
    <section id="herosearch">
      <div id="herosearch-img">
        <img src={HeroSearchimg} alt="" />
      </div>
      <Search />
    </section>
  );
}
