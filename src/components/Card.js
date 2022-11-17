
const Card = ({card, grid}) => {
    return(
       
        <div class={grid}>
        <div className="card" >
        <img className="card-img-top" src= {card.img} alt ={card.title}/>
        <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">{card.desc}</p>
            <a href={card.link} class="btn btn-primary">{card.linktitle}</a>
        </div>
        <div class="card-footer">
        {card.techstack.map((techstack) => (<small class="text-muted">
        {techstack} </small>))}
        </div>
        </div>
        </div>
        )
}

export default Card
