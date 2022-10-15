// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів


import characters from "./Characters";

function Character(props) {
    const {character} = props;
    return (
        <div >
            <h2>{character.id} -- {character.name}</h2>
            <p>{character.status} -- {character.species}</p>
        </div>
    );
}

export default Character;