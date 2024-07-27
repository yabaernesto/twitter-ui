import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status() {

  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:',
    '✅ npm start: De 32s para 400ms (sim, demorava 30s',
    '✅ npm build: De 120s para 22s',
    'Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥'
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    // se clicar ctrl + enter ou command + enter
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="timeline">
        <Header title="Tweet" />

        <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum exercitationem repellendus soluta sint facere id pariatur quisquam facilis voluptas ipsa atque voluptate quia voluptatibus sit culpa quo, ullam quibusdam illo?" />
        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/yabaernesto.png" alt="Yaba Ernesto" />
            <textarea 
              name="tweet" 
              placeholder="Tweet your answer" 
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value);
              }}
            />
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>

        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
    </main>
  );
}
