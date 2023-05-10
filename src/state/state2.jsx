import { useState } from 'react';
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
/* 2 uzduotis. 
Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje.
 Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, 
 o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25*/


function State2() {
   const [number,setNumber] = useState(random(5,25));
   const [number2,setNumber2] = useState(random(5,25));
    const [shape, setShape] = useState('btn-round');
const changeNumber =_=>{
    setNumber(number=>random(5,25) )
}
    const changeShape = _ => {
        setShape(shape => shape === 'btn-square' ? 'btn-round' : 'btn-square');

    }
    return(
    <div>
        <button className={shape} onClick={changeShape}> { number2}</button>
        <button className="btn-round" onClick={changeNumber} >{ number}</button>
    </div>
    );
}
export default State2