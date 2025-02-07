import { useState } from 'react';

export function ResponsiveMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button
                className='md:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label='Toggle menu'
            >
                <img
                    src='/menu.svg'
                    alt='Menu'
                    className='w-8 h-8 md:w-16 md:h-16'
                />
            </button>
            {isMenuOpen && (
                <nav className='mt-4 md:hidden'>
                    <ul className='flex flex-col space-y-2'>
                        <li>
                            <a href='/' className='hover:underline'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#schedule' className='hover:underline'>
                                Schedule
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='hover:underline'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
