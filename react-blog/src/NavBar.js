import { Link } from 'react-router-dom';

const Navbar = () => {
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Articles</Link>
                <Link to='/'>ArticlesList</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar;