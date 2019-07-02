import React from 'react';
import { Link } from 'react-router-dom';

export default function ThanosSection() {
  return (
    <section id="thanos-section">
      <div id="thanos-image">
        <br></br>
        <img src={require('./images/thanos_section.png')} />
      </div>
    </section>
  )
}