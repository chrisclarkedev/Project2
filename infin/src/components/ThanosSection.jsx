import React from 'react';
import Thanosimg from './images/thanos_section.png';
import { Link } from 'react-router-dom';

export default function ThanosSection() {
  return (
    <div className="thanos-section">
      <img src={Thanosimg} alt="" />
    </div>
  );
}
