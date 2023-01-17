import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


export default function SocialsContainer() {
    return (
        <div className="my-14 text-center">
            <h1 className="text-2xl font-bold">Come find me</h1>
            <div className="mt-6  flex justify-center">
                <div className="flex space-x-4">
                    <Link href="">
                        <button className="flex items-center px-4 py-2 bg-cyan-400 rounded-md font-semibold cursor-pointer transition hover:bg-cyan-500">
                            <AiFillLinkedin />
                            <span className="ml-1">Linkedin</span>
                        </button>
                    </Link>
                    <Link href="">
                        <button className="px-4 flex items-center py-2 bg-gray-800 rounded-md font-semibold cursor-pointer transition hover:bg-gray-900">
                            <AiFillGithub />
                            <span className="ml-1">GitHub</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
