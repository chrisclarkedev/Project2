import React from 'react';
import { Link } from 'react-router-dom';

export default function ThanosSection() {
  return (
    <section id="thanos-section">
      <div id="thanos-image">
        <img src={require('./images/thanos_section.png')} />
        <p>Who will stop Thanos.....?</p>
      </div>
    </section>
  )
}