import React from 'react';
import { Link } from 'react-router-dom';

export default function ComicSection() {
  return (
    <div class="container">
      <div class="box">
        <div class="imgBx">
          <img src={require('./images/img1.jpg')} />
          <div class="content">
            <h4>Infinity Gauntlet Vol 1 #1</h4>
            <p>Seeking to impress the Mistress Death, who returned him to life, Thanos has gained control over the Infinity Gauntlet -- making him an all-powerful god! With Mephisto as his familiar, Thanos wipes out half of the life in the universe with a snap of his fingers! What will Earth do when half its the heroes are killed?</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src={require('./images/img2.jpg')} />
          <div class="content">
            <h4>Infinity Gauntlet Vol 1 #2</h4>
            <p>Billions of people across the planet have disappeared; now, the super humans of Earth scramble to find out what's going on! Featuring Quasar! Dr. Strange! Dr. Doom! Captain America! Thor! Warlock! Wolverine! Iron Man! She-Hulk! The Silver Surfer! And more!</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src={require('./images/img3.jpg')} />
          <div class="content">
            <h4>Infinity Gauntlet Vol 1 #3</h4>
            <p>To start the day, Thanos wrote his name across the universe in planets. To finish, he'll stand against the assembled might of Earth's remaining heroes! Plus: When Mistress Death rejects Thanos again, he creates his own perfect mate: Meet Terraxia the Terrible!</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src={require('./images/img4.jpg')} />
          <div class="content">
            <h4>Infinity Gauntlet Vol 1 #4</h4>
            <p>Wolverine, broken! The Scarlet Witch, incinerated! She-Hulk and Namor, buried alive! The Vision, ripped apart! Thor, shattered! Iron Man, beheaded! Cyclops, suffocated! When Earth's heroes attack, Thanos takes the kid gloves off -- but leaves the god-making Infinity Gauntlet on!</p>
          </div>
        </div>
      </div>

    </div>
  )
}