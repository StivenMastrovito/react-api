export default function Card({actor}) {
    return (
        <div className={`card ${actor.death_year !== undefined ? "death" : ""}`}>
            <div className="img_card"><img src={actor.image} alt={actor.name} /></div>
            <div className='body_card'>
                <p><strong>Nome: </strong>{actor.name}</p>
                <p><strong>Nazionalità:</strong> {actor.nationality}</p>
                <p><strong>Data di nascita:</strong> {actor.birth_year} {actor.death_year !== undefined && `Morte: ${actor.death_year}`}</p>
                <p><strong>Riconoscimenti:</strong> {typeof actor.awards === "string" ? actor.awards : actor.awards.join(", ")}</p>
                <p><strong>Film più famosi: </strong>{actor.known_for !== undefined ? actor.known_for.join(", ") : actor.most_famous_movies.join(", ") }</p>
                <p><strong>Biografia:</strong> {actor.biography}</p>
            </div>

        </div>
    )
}