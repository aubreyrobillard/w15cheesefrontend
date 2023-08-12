import { Link } from 'react-router-dom'


const Header = () => {
    return <div className="Header">
        <Link to='/'>
            <div>Cheese App(etite)</div>
        </Link>
    </div>
}

export default Header