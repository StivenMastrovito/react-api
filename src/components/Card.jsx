export default function Card({actor}) {
    return (
        <div className="card">
            <div className="img_card"><img src={actor.image} alt={actor.name} /></div>
            <div className='body_card'>
                <h3>Nome: {actor.name}</h3>
                <h3>Nazionalità: {actor.nationality}</h3>
                <h3>Data di nascita: {actor.birth_year} {actor.death_year !== undefined && `Morte: ${actor.death_year}`}</h3>
                <h3>Riconoscimenti: {typeof actor.awards === "string" ? actor.awards : actor.awards.join(", ")}</h3>
                <h3>Film più famosi: {actor.known_for !== undefined ? actor.known_for.join(", ") : actor.most_famous_movies.join(", ") }</h3>
                <h3>Biografia: {actor.biography}</h3>
            </div>

        </div>
    )
}