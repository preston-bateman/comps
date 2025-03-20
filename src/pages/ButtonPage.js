import Button from "../components/Button";
import { GoPackage } from 'react-icons/go';


function ButtonPage () {
  return (
    <div>
      <div>
        <Button success rounded outline><GoPackage />Click Me</Button>
      </div>
      <div>
        <Button danger outline><GoPackage />Please</Button>
      </div>
      <div>
        <Button warning><GoPackage />It Won't Hurt</Button>
      </div>
      <div>
        <Button secondary outline><GoPackage />Much</Button>
      </div>
      <div>
        <Button primary rounded><GoPackage />Just Click Me</Button>
      </div>
    </div>
  );
}


export default ButtonPage;


//fixes that have been put in may be unstable if using typescript