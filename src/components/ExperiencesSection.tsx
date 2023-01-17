import React from 'react';

export default function ExperiencesSection() {
    return (
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
    );
}