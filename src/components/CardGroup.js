import Card from './Card'

const CardGroup=({title, cards, grid}) =>{
    return (
        <div class="card-deck">
        <div class="row">
            <h3>{title}</h3>
            <p>Add a filter function here with the tags: 
                web development, project management, data analysis,
                </p>
        {cards.map((card) => (<Card card={card} grid ={grid}/>))}
        </div>
        </div>
    )
}

export default CardGroup