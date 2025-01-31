import Button from "./Button";
import { GoBell } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>Click Me</Button>
      </div>
      <div>
        <Button danger outline>Please</Button>
      </div>
      <div>
        <Button warning>It Won't Hurt</Button>
      </div>
      <div>
        <Button secondary outline>Much</Button>
      </div>
      <div>
        <Button primary rounded>Just Click Me</Button>
      </div>
    </div>
  );
}

export default App;
