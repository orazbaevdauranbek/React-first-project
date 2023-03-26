import Button from "./Button"
function Navbar() {
    return (
        <header className="header">
            <h1>LOGO</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                
            </ul>
            <Button/>
        </header>
    )
}

export default Navbar