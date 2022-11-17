import Button from './Button'

const Jumbotron = () =>{
    return(
        <div className ="float-left jumbotron align-items-end">
        <h2 class="display-4">Hi! I'm Ayenna!</h2>
        <p class="lead"> The last few months, I've been coding it up at Hackbright Academy. Prior to Hackbright, I worked at <a href="civicpulse.org">CivicPulse</a> as a research associate generating data-driven insights about local government.</p>
        <hr/> 
        <Button text = 'Projects' link = "#Projects"/>
        <Button text = 'Email Me' link = 'mailto:ayenanc@gmail.com'/>
        <Button text = 'LinkedIn' link = 'linkedin.com/ayennac'/>
        <Button text = 'Github' link = 'github.com/ayennac'/></div>
        )
}
export default Jumbotron