import React from 'react';

export default function Header() {
    return (
        <header className="text-center mt-12 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold">Kaung Zaw</h1>
            <h2 className="text-2xl font-semibold my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600">
                Software Developer
            </h2>
            <h4>I build things for the web</h4>
            <p className="mt-6 text-sm text-gray-300">
                I am a software developer focused on building beautiful and
                high-performance system using cutting-edge technologies.
            </p>
            <div className="mt-12 space-x-4">
                <a className="btn-primary" href="mailto:example@gmail.com">
                    👋 Contact Me
                </a>
                <a
                    className="btn-secondary"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/portfolio-40dfe.appspot.com/o/myResume.pdf?alt=media&token=9a9b83e6-a646-4e56-b185-20e51a8be504"
                    download="kaung-resume.pdf"
                    type="application/pdf"
                >
                    💼 My Resume
                </a>
            </div>
        </header>
    );
}
