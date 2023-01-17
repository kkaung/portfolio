import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
    const { route } = useRouter();

    const homeRoute = route === '/';
    const projectsRoute = route === '/projects';

    return (
        <nav className="container mx-auto py-6 flex items-center justify-between">
            <Link href="" className="font-bold cursor-pointer text-lg">
                Kaung
            </Link>
            <ul className="flex items-center space-x-6">
                <Link
                    href=""
                    className={`${homeRoute && 'text-cyan-400'} font-bold`}
                >
                    Home
                </Link>
            </ul>
        </nav>
    );
}
