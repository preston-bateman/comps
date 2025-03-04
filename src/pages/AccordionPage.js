import Button from "../components/Button";
import { GoPackage } from 'react-icons/go';
import Accordion from "../components/Accordion";



function AccordionPage () {
const items = [
  {
    id: '1',
    label: 'This is just filler, pay me no mind',
    content: 'If you are happening to read this, then you should also go check out my book. I am hoping to have it publised soon under the title \'The Future King\'. It is a great continuance of the Arthurian legend, finishing the prophecy by bringing Arthur back in modern times.'
  },{
    id: '2',
    label: 'This is example 2',
    content: 'Luke I am your father. He then replied, Noooooo. But basically I am just taking up space. Blah blah blah, blah blah blah.'
  },{
    id: '3',
    label: 'This is just filler, pay me no mind',
    content: 'Don\'t mind the man behind the curtain. I guess I should make this content a little longer so as to not make it awkward'
  }
]

  return (
    <Accordion items={items} />
  );
}


export default AccordionPage;