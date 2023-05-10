const dogs = [
    {id: 0, name:'šunius'},
    {id: 1, name:'šuo'},
    {id: 2, name:'Bobikas'},
    {id: 3, name:'kudlius'},
    {id: 4, name:'Šarikas'},
    {id: 5, name:'avigalvis'},
];

// 1 užduotis
function SuoKvadrate() {
    let style= {
        width: 100,
        height: 100,
        border: "5px solid yellow",
        margin: 5,
        display: 'inline-block',
    }
    const dogsList = dogs.map(dog => <li key={dog.id} style={{...style}}>{dog.name}</li>);
    return <ul>{dogsList}</ul>;
}

// 2 užduotis
function SuoApskritime() {
    let styleSecond= {
        width: 100,
        height: 100,
        border: "5px solid pink",
        borderRadius: "50%",
        margin: 5,
        display: 'inline-block',
    }
    const dogsList = dogs.sort((dog1, dog2) => dog1.length - dog2.length).map(dog => <li key={dog.id} style={{...styleSecond}}>{dog.name}</li>);
    return <ol>{dogsList}</ol>;
}

// 3 užduotis
function SuoFormose() {
    let style= {
        width: 100,
        height: 100,
        border: "5px solid pink",
        margin: 5,
        display: 'inline-block',
    }
    let styleSecond= {
        width: 100,
        height: 100,
        border: "5px solid pink",
        borderRadius: "50%",
        margin: 5,
        display: 'inline-block',
    }
    const dogsList = dogs.map((dog, index) => {
        if (index % 2 === 0) {
            return <li style={{...style}}>{dog.name}</li>;
        }
            else {
                return <li style={{...styleSecond}}>{dog.name}</li>
            }
    })
    return <ul>{dogsList}</ul>;
}

// 4 užduotis
function DogBigLetter () {
    const dogsList = dogs.filter(dog => dog.name[0] === dog.name[0].toLowerCase()).map(dog => <li key={dog.id}>{dog.name}</li>);

    return <ul>{dogsList}</ul>;
}

// 5 užduotis
function DogsColor () {
    const dogsList = dogs.map(dog => {
        if (dog.name.length > 6) {
            return <li key={dog.id} style={{color: 'green'}}>{dog.name.length}</li>;
        }
            else {
                return <li key={dog.id} style={{color: 'red'}}>{dog.name.length}</li>
            }
    })
    return <ul>{dogsList}</ul>;
}

export {SuoKvadrate, SuoApskritime, SuoFormose, DogBigLetter, DogsColor}