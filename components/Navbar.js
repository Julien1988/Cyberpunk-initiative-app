import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href='/'>
            <a className="navbar-brand">Cyberpunk RED Init App</a>
        </Link>
        <Link href='/api/auth/login'>
            <a className="navbar-brand">Login</a>
        </Link>
        <Link href='/api/auth/logout'>
            <a className="navbar-brand">Logout</a>
        </Link>
        <Link href='/profile'>
            <a className="navbar-brand">Profile</a>
        </Link>
   </nav>
);

export default Navbar;