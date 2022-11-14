
const Button = ({text, link}) => {
    return (
        <a href={link} role ="button" className="btn btn-link"> {text}</a>
    )
}

export default Button

