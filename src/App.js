import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Pallete pallete =  {generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
