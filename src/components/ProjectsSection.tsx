import Link from 'next/link';
import { projects } from '@/constants';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

export default function ProjectsSection() {
    return (
        <section className="mt-10  sm:flex sm:justify-between">
            <div className="text-cyan-400 font-bold uppercase sm:w-[100px]">
                Projects
            </div>
            <div className="flex-1 mt-4 space-y-6 sm:ml-20 sm:mt-0">
                {projects.map(
                    ({
                        name,
                        description,
                        githubLink,
                        demoLink,
                        techStacks,
                    }) => (
                        <div>
                            <div className="flex justify-between mb-1">
                                <h3>{name}</h3>
                                <div className="flex space-x-3">
                                    <Link
                                        target="_blank"
                                        href={demoLink}
                                        className="transition hover:text-cyan-400"
                                    >
                                        <FiExternalLink />
                                    </Link>
                                    <Link
                                    target="_blank"
                                        href={githubLink}
                                        className="transition hover:text-cyan-400"
                                    >
                                        <AiFillGithub />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">
                                {description}
                            </p>
                            <div className="flex space-x-2 mt-1 flex-wrap">
                                {techStacks.map((stack, idx) => (
                                    <div
                                        key={idx}
                                        className="py-1 px-2 bg-gray-900 rounded text-gray-300 text-xs sm:text-sm mb-2"
                                    >
                                        {stack}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
