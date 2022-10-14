function Characters(props) {

  fetch(`https://rickandmortyapi.com/api/character`)
      .then(value => value.json())
      .then(value => {})

    return (
        <div>

        </div>
    );
}

export default Characters;