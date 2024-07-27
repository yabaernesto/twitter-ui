import { Tweet } from './../components/Tweet';
import { Header } from './../components/Header';

import './Timeline.css';
import { Separator } from '../components/Separator';
import { FormEvent, useState, KeyboardEvent } from 'react';

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");

  const [tweets, setTweets] = useState([
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:',
    '✅ npm start: De 32s para 400ms (sim, demorava 30s',
    '✅ npm build: De 120s para 22s',
    'Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥'
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    // se clicar ctrl + enter ou command + enter
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  return (
    <main className="timeline">
        <Header title="Home" />

        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/yabaernesto.png" alt="Yaba Ernesto" />
            <textarea 
              name="tweet" 
              placeholder="What's happening?" 
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value);
              }}
            />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}
    </main>
  );
}
