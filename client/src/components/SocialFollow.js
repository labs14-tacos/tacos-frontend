import React from 'react';

import './SocialFollow.css';
export default function SocialFollow() {
    return (
        <div className="social-container">
      {/* <h3>Follow Me</h3> */}
      <a
        href="https://www.youtube.com/"
        className="youtube social"
      >
        <i class="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <i class="fab fa-facebook-square" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
      <i class="fab fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <i class="fab fa-instagram" />
      </a>
    </div>
    )
}