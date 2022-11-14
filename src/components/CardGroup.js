import Card from './Card'

const CardGroup=({cards, grid}) =>{
    return (
        <>
        <div class="card-deck">
        <div class="row">
        {cards.map((card) => (<Card card={card} grid ={grid}/>))}
        </div>
        </div>
        </>
    )
}

export default CardGroup