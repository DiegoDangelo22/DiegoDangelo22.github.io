import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';

const ProjectsComponent = () => {
    const $selectedLanguage = useStore(selectedLanguage)

    return <div className="bg-gray-900 pt-14 h-fit grid justify-items-center items-center">
        <div className="grid grid-cols-2 gap-20 w-3/4 my-20 relative max-md:grid-cols-1">
            <div className="bg-gray-200 p-6 rounded-md border-2 border-rose-500 gap-5 flex flex-col">
                <div className="bg-rose-500 rounded-md p-2 text-center flex grow items-center justify-center">
                    <h1>{$selectedLanguage.projects_portfolio}</h1>
                </div>
                <img src="/old-portfolio.png"/>
                    <div>
                        <p className="text-center text-black mb-2">{$selectedLanguage.source_code}</p>
                        <div className="flex justify-center gap-5">
                            <a href="https://github.com/DiegoDangelo22/Back-End" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Backend</a>
                            <a href="https://github.com/DiegoDangelo22/Front-End" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Frontend</a>
                        </div>
                    </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-md border-2 border-rose-500 gap-5 flex flex-col">
                <div className="bg-rose-500 rounded-md p-2 text-center flex grow items-center justify-center">
                    <h1>{$selectedLanguage.projects_ecommerce}</h1>
                </div>
                <img src="/first-ecommerce.png"/>
                    <div>
                        <p className="text-center text-black mb-2">{$selectedLanguage.source_code}</p>
                        <div className="flex justify-center gap-5">
                            <a href="https://github.com/DiegoDangelo22/MercaLibre-Back" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Backend</a>
                            <a href="https://github.com/DiegoDangelo22/MercaLibre-Front" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Frontend</a>
                        </div>
                    </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-md border-2 border-rose-500 gap-5 flex flex-col">
                <div className="bg-rose-500 rounded-md p-2 text-center flex grow items-center justify-center">
                    <h1>{$selectedLanguage.projects_tetris}</h1>
                </div>
                <img src="/tetris.png"/>
                    <div>
                        <p className="text-center text-black mb-2">{$selectedLanguage.source_code}</p>
                        <div className="flex justify-center gap-5">
                            <a href="https://github.com/DiegoDangelo22/tetris-vanilla-js" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Frontend</a>
                        </div>
                    </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-md border-2 border-rose-500 gap-5 flex flex-col">
                <div className="bg-rose-500 rounded-md p-2 text-center flex grow items-center justify-center">
                    <h1>{$selectedLanguage.projects_social_website}</h1>
                </div>
                <img src="/social website/home.png"/>
                    <div>
                        <p className="text-center text-black mb-2">{$selectedLanguage.source_code}</p>
                        <div className="flex justify-center gap-5">
                            <a href="https://github.com/DiegoDangelo22/sns-back" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Backend</a>
                            <a href="https://github.com/DiegoDangelo22/sns-front" className="bg-rose-500 rounded-md p-1 text-white hover:bg-rose-600">Frontend</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export default ProjectsComponent