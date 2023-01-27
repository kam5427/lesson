function Character(props) {
    return (
        <div>
            <p>Персонаж : {props.name}</p>
            <p>Возраст: {props.age} y.o.</p>
            <p>Род деятельности: {props.job}</p>
            <img src={props.image} alt="Batman photo"/>

        </div>
    );
}


export default Character;