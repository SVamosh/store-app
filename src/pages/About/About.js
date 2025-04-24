
import './style.css';
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function About() {
  return (
    <div className="about wrapper">
      <p className="about__text">
        Wear Store is an online space where fashion and modern technologies
        meet. We are pleased to offer you collections from the best world brands
        and help you choose the perfect wardrobe for all occasions. And also
        provide you with high-quality service, fast delivery and a profitable
        loyalty system. We were founded by a group of enthusiasts in 2021 and
        have since carved out our niche in the clothing and fashion accessories
        market.Every year we strive to improve the quality of our products and
        services. After all, our goal is the joy of our customers
      </p>

      <div className="social-media">
        <h3>For more information you can visit our social media:</h3>

        <ul className="social-media__list">
          <li>
            <a href="/#">
              <FacebookIcon />
              - Facebook
            </a> 
          </li>

          <li>
            <a href="/#">
              <TelegramIcon />
              - Telegram
            </a>
          </li>

          <li>
            <a href="/#">
              <InstagramIcon />
              - Instagram
            </a>
          </li>

          <li>
            <a href="/#">
              <XIcon />
              - X(twitter)
            </a>
          </li>
      </ul>
      </div>
    </div>
  );
}

export default About;
