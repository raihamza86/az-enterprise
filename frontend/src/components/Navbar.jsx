import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact-us' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed inset-x-0 ${scrolled ? 'top-0' : 'top-4'} z-20 transition-all duration-300 top-0`}>
            <div
                className={`${scrolled ? 'w-full rounded-none' : 'w-[80%] rounded-4xl'} mx-auto flex justify-between items-center py-6 px-6 md:px-16 shadow-md bg-white transition-all duration-300`}
            >
                {/* Logo */}
                <div>
                    <img src="/logo.png" alt="logo" className="w-24" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-8 text-gray-700 font-bold">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden w-full bg-white px-6 pb-4 shadow-md">
                    <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
