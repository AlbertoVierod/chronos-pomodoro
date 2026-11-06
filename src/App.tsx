import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Fala ai mano!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </>
  );
}
