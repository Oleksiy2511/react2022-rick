
import characters from "./Characters";

function Character(props) {
    const {character} = props;
    return (
        <div >
            <h2>{character.id} -- {character.name}</h2>
            <p>{character.status} -- {character.species}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
}

export default Character;