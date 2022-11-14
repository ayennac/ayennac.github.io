import Button from './Button'


const Header = () => {
    return (
        <div class = "row">
            <div class = "col-sm-6">
                <h1>Ayenna Cagaanan</h1>
            </div>

        <div class = "col-sm-6">
        <Button text = 'About ' link = '#About' /> 
        <Button text = 'Projects' link = "#Projects"/>
        <Button text = 'LinkedIn' link = 'linkedin.com/ayennac'/>
        <Button text = 'Github' link = 'github.com/ayennac'/>
        </div>
        </div>
    )
}


export default Header