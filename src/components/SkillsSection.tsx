import React from 'react';
import { frameworks, languages, databases, tools } from '@/constants';

export default function SkillsSection() {
    return (
        <section className="mt-20 sm:flex sm:justify-between">
            <div className="text-cyan-400 font-bold uppercase sm:w-[100px]">
                Skills
            </div>
            <div className="flex-1 mt-4 sm:ml-20 sm:mt-0 sm:flex sm:space-x-8">
                <div className="flex justify-between mb-6 sm:mb-0 sm:space-x-8">
                    <div className="flex-1 sm:flex-0 ">
                        <div className="uppercase font-semibold">Languages</div>
                        <div className="text-white/90 mt-2">
                            {languages.map(({ id, name }) => (
                                <div key={id}>{name}</div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="uppercase font-semibold">
                            Frameworks
                        </div>
                        <div className="text-white/90 mt-2">
                            {frameworks.map(({ id, name }) => (
                                <div key={id}>{name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between sm:flex sm:justify-between sm:space-x-8">
                    <div className="flex-1 sm:flex-0">
                        <div className="uppercase font-semibold">Databases</div>
                        <div className="text-white/90 mt-2">
                            {databases.map(({ id, name }) => (
                                <div key={id}>{name}</div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="uppercase font-semibold">Tools</div>
                        <div className="text-white/90 mt-2">
                            {tools.map(({ id, name }) => (
                                <div key={id}>{name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
