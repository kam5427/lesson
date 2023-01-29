import {useState} from "react";
import {Button} from 'react-bootstrap';

interface CharacterProps {
    character: ICharacter
}

function Character({character}:CharacterProps) {

    const [opened, setOpened] = useState(false);

    return (
        <div className="card col-3 ms-5 me-5 mt-2 border-white">
            <h5 className="card-title ms-5 me-5 mt-3">Персонаж : {character.title}</h5>
              <Button className="ms-5 me-5 mt-3 " onClick={ () => { setOpened(!opened); } }> {opened ? `Закрыть`: `Открыть`} </Button>

            {
              opened &&
            <div >
              <img className="card-img p-3" src={character.image} alt={character.alt}/>
                <div className="card-body">

                    <p className="card-text">Возраст: {character.age} y.o.</p>
                    <p className="card-text">Род деятельности: {character.job}</p>
                </div>


            </div>
            }
        </div>

    );
}

export default Character;