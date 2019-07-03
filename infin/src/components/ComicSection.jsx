import React from 'react';
import { Link } from 'react-router-dom';

export default function ComicSection() {
  return (
    <div class="container">
      <div class="box">
        <div class="imgBx">
          <img src={require('./images/img1.jpg')} />
          <div class="content">
            <h4>nfinity Gauntlet Vol 1 #1</h4>
            <p>Seeking to impress the Mistress Death, who returned him to life, Thanos has gained control over the Infinity Gauntlet -- making him an all-powerful god! With Mephisto as his familiar, Thanos wipes out half of the life in the universe with a snap of his fingers! What will Earth do when half its the heroes are killed?</p>
          </div>
        </div>
      </div>
    </div>
  )
}