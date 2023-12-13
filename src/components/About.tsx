import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';

const About = () => {
    const $selectedLanguage = useStore(selectedLanguage)

    return <div id="about" className="h-screen max-md:h-fit pt-14 w-full flex justify-around items-center max-md:flex-col max-md:gap-10">
        <div>
            <h2 className="text-center mb-5 font-bold text-2xl">{$selectedLanguage.about_me}</h2>
            <div className='border-2 w-[300px] h-[300px] rounded-full overflow-hidden relative'>
                <img src="/diego.jpg" width="300px" className='absolute -top-7' />
            </div>
        </div>
        <section className="w-2/4 h-full flex flex-col gap-10 justify-center">
            <p className="leading-[30px]">
                {$selectedLanguage.about_me_p1}
            </p>
            <p>
                {$selectedLanguage.about_me_p2}
            </p>
            <p>
                {$selectedLanguage.about_me_p3}
            </p>
        </section>
    </div>
}

export default About