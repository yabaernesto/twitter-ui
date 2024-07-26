import { Tweet } from "./components/Tweet";
import './global.css';

export function App() {
  return (
    <div>
      <Tweet user="Yaba Ernesto" likes={10}>
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Yaba Ernesto">
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Yaba Ernesto">
        Meu primeiro tweet
      </Tweet>
    </div>
  )
}
