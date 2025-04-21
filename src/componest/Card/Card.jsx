export const Card = (character) =>{
    const {name, image, status, species} = character
    return(
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
        </div>
    )
}