import { useState } from 'react';

/*Sukurti aplikaciją, kuri turi mygtukus plus ir minus,
 bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
 */
function State3(){
    const [sk,setSk] = useState(0);
    //const [number,setNumber] = useState(random(5,25));
    //const changeShape = _ => {
      //  setShape(shape => shape === 'btn-square' ? 'btn-round' : 'btn-square');
//}
const changeNumberPlius =_=>{
    setSk(sk => sk = sk+1)
}
const changeNumberMinus =_=>{
    setSk(sk => sk = sk-3)
}
return(
    <div>
        <p>{sk}</p>
        <button className='btn-square' onClick={changeNumberPlius}>+</button>
        <button className='btn-square'onClick={changeNumberMinus}>-</button>
    </div>
)
}
export default State3