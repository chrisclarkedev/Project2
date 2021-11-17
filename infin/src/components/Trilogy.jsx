import React from 'react';
import ComicSection from './ComicSection';

export default function Trilogy() {
  return (
    <section id="trilogy">
      <div id="trilogy-img">
        <img src={require('./images/trilogy_section.jpg')} />
      </div>
      <div id="trilogy-info">
        <h1>Cosmic Event</h1>
        <h2>Infinity Gauntlet Trilogy</h2>
        <p>
          All of Marvel's top heroes star in this cosmic epic, where they must
          stop the Infinity-fueled "Mad Titan" Thanos, Magus (Adam Warlock's
          evil counterpart), and the Goddess (Adam Warlock's 'benevolent'
          counterpart) - all of whom have been infused with near-omnipotent
          power of the Infinity Gems!
        </p>
        <h3>Infinity Gauntlet</h3>
        <ComicSection />
      </div>
    </section>
  );
}
