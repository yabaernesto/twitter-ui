import { ArrowCounterClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import './Tweet.css';

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  
  return(
    <Link to='/status' className="tweet">
      <img src="https://github.com/JoilsonCapemba.png" alt="Joao Capemba" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Joao Capemba</strong>
          <span>joaocapemba@gmail.com</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            15
          </button>

          <button type="button">
            <ArrowCounterClockwise />
            100
          </button>

          <button type="button">
            <Heart />
            6
          </button>
        </div>
      </div>
    </Link>
  );
}
