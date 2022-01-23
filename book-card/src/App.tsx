import React from 'react'
import Cards from './molecules/Cards';
import beyond from './atoms/images/beyondEntrepreneur.png';

function App(){
  return (
    <>
    <Cards  src={beyond} name="Beyond Entrepreneurship" author="Jim Collins & Bill Lazier" duration="13" />   
</>
  );
}
export default App;