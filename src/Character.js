import {useState} from "react";

interface CharacterProps {
    character: ICharacter
}

function Character({character}:CharacterProps) {

    const [opened, setOpened] = useState(false);

    return (
        <div>
              <button onClick={ () => { setOpened(!opened); } }>
            {opened ? `Закрыть`: `Открыть`}
            </button>
            { opened && <div>
              <p>Персонаж : {character.title}</p>
              <p>Возраст: {character.age} y.o.</p>
              <p>Род деятельности: {character.job}</p>
              <img src={character.image} alt={character.alt}/>
            </div>}
        </div>


    );
}

export default Character;