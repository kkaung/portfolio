import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { frameworks, languages, databases, tools, projects } from '@/constants';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export default function HomePage() {
    return (
        <Layout>
            <Header />
            <div>
                <section className="mt-20 sm:flex sm:justify-between">
                    <div className="text-cyan-400 font-bold uppercase sm:w-[100px]">
                        Skills
                    </div>
                    <div className="flex-1 mt-4 sm:ml-20 sm:mt-0 sm:flex sm:space-x-8">
                        <div className="flex justify-between mb-6 sm:mb-0 sm:space-x-8">
                            <div className="flex-1 sm:flex-0 ">
                                <div className="uppercase font-semibold">
                                    Languages
                                </div>
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
                                <div className="uppercase font-semibold">
                                    Databases
                                </div>
                                <div className="text-white/90 mt-2">
                                    {databases.map(({ id, name }) => (
                                        <div key={id}>{name}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="uppercase font-semibold">
                                    Tools
                                </div>
                                <div className="text-white/90 mt-2">
                                    {tools.map(({ id, name }) => (
                                        <div key={id}>{name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-10 sm:flex sm:justify-between">
                    <div className="text-cyan-400 font-bold uppercase sm:w-[100px]">
                        Experiences
                    </div>
                    <div className="flex-1  mt-4 flex space-x-10 sm:ml-20 sm:mt-0">
                        <div className="flex justify-between w-full">
                            <div>
                                <div>CB Bank</div>
                                <div className="text-sm text-gray-400">
                                    Full Stack Developer
                                </div>
                            </div>
                            <div className="text-sm">Jan 2022 - Jun 2022</div>
                        </div>
                    </div>
                </section>
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
                                                href=""
                                                className="transition hover:text-cyan-400"
                                            >
                                                <FiExternalLink />
                                            </Link>
                                            <Link
                                                href=""
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
                                    <span className="ml-1">Linkedin</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
