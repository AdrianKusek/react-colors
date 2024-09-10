import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  function findPallete(id){
    return seedColors.find(function(pallete){
      return pallete.id === id
    })

  }
    // This component is rendered inside the route for the palette
    function PalleteWithId() {
      const { id } = useParams(); // Get the 'id' from the URL
      const foundPalette = findPallete(id); // Find the palette by ID
      return <Pallete pallete={generatePalette(foundPalette)} />;
    }
  return (
    <Routes>
        <Route path="/" element={<div>Pallets here</div>}  />
        <Route path="/pallete/:id" element={ <PalleteWithId/>} />
      </Routes>
    // <div>
    //   <Pallete pallete =  {generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
