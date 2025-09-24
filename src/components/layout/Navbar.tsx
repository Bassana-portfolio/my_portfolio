import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    Clyde<span>.</span>
                </Link>

                <button
                    className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <Link href="#home-section" className="nav-link">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#about-section" className="nav-link">
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#skills-section" className="nav-link">
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#services-section" className="nav-link">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#projects-section" className="nav-link">
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#blog-section" className="nav-link">
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#contact-section" className="nav-link">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}