import Button from "./components/Button";
import { GoPackage } from 'react-icons/go';
import Accordion from "./components/Accordion";



function App () {
const items = [
  {
    id: '1',
    label: 'This is just filler, pay me no mind',
    content: 'yes we are just innocent filler'
  },{
    id: '2',
    label: 'This is example 2',
    content: 'Luke I am your father'
  },{
    id: '3',
    label: 'This is just filler, pay me no mind',
    content: 'Don\'t mind the man behind the curtain'
  }
]

  return (
    <Accordion items={items} />
  );
}


export default App;
