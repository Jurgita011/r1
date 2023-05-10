import { useState } from 'react';

/* 1 uzduotis. 
Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. 
Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.*/

export default function Button() {

    const [shape, setShape] = useState('btn-round');

    const changeShape = _ => {
        setShape(shape => shape === 'btn-square' ? 'btn-round' : 'btn-square');
    }

    return (
        <button className={shape} onClick={changeShape}>Change</button>
    );
}

    

 