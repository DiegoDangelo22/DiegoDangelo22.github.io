import './Header.css';
import { handleLanguage, selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';
import { useState } from 'react';

const Header = () => {
    const $selectedLanguage = useStore(selectedLanguage);
    const [changeLanguageModalShown, setChangeLanguageModalShown] = useState(false);

    function handleHamburgerMenu() {
        const hamburgerMenu:any = document.querySelector("#hamburger-menu");
        hamburgerMenu.classList.contains("hidden") ? hamburgerMenu.classList.remove("hidden") : hamburgerMenu.classList.add("hidden");
    }

    return <nav className="w-full h-[56px] fixed top-0 z-10 text-white flex justify-between py-4 px-10">
    <div>
        <a href="/"><span className="text-rose-500 font-bold">Diego</span> <span className="font-bold">D'Angelo</span></a>
    </div>
    <svg onClick={handleHamburgerMenu} className="icon icon-tabler icon-tabler-menu-2 md:hidden" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
    <div id='hamburger-menu' className="hidden fixed right-0 top-14 w-52 backdrop-blur-[10px]" style={{background: "rgba(17, 24, 39, 0.9)"}}>
        <ul className="gap-10 md:hidden">
            <li className="hover:text-rose-400">
                <a href="/projects">{$selectedLanguage.projects}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#about">{$selectedLanguage.about}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#skills">{$selectedLanguage.skills}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#contact">{$selectedLanguage.contact}</a>
            </li>
            <div className="relative" onClick={()=>{
                const modal:any = document.querySelector("#modal-mobile");
                if(modal.style.display === 'flex') {
                    modal.style.display = "none";
                    setChangeLanguageModalShown(false);
                } else {
                    modal.style.display = "flex";
                    setChangeLanguageModalShown(true);
                }
            }}>
                <li className={changeLanguageModalShown?'bg-rose-500':''}>{$selectedLanguage.change_language}</li>
                <div id='modal-mobile' className='hidden flex-col gap-1 py-1 absolute left-[-112px] top-0 backdrop-blur-[10px]' style={{background: "rgba(17, 24, 39, 0.9)"}}>
                    <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer px-2' onClick={()=>handleLanguage('en')}>
                        <img src='/gb.svg' width={'20px'}/>
                        <span>ENGLISH</span>
                    </div>
                    <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer px-2' onClick={()=>handleLanguage('es')}>
                        <img src='/es.svg' width={'20px'}/>
                        <span>ESPAÑOL</span>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div className='max-md:hidden'>
        <ul className="gap-10 hidden md:flex">
            <li className="hover:text-rose-400">
                <a href="/projects">{$selectedLanguage.projects}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#about">{$selectedLanguage.about}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#skills">{$selectedLanguage.skills}</a>
            </li>
            <li className="hover:text-rose-400">
                <a href="/#contact">{$selectedLanguage.contact}</a>
            </li>
            <div onMouseEnter={()=>{
                    const modal:any = document.querySelector("#modal");
                    modal.style.display = 'flex'
                }} onMouseLeave={()=>{
                    const modal:any = document.querySelector("#modal");
                    modal.style.display = 'none'
                }}>
                <li className='hover:bg-rose-500'>{$selectedLanguage.change_language}</li>
                <div id='modal' className='hidden mt-4 flex-col gap-1 py-1' style={{background: "rgba(17, 24, 39, 0.9)"}}>
                    <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer pl-2' onClick={()=>handleLanguage('en')}>
                        <img src='/gb.svg' width={'20px'}/>
                        <span>ENGLISH</span>
                    </div>
                    <div className='flex gap-2 hover:text-rose-400 hover:cursor-pointer pl-2' onClick={()=>handleLanguage('es')}>
                        <img src='/es.svg' width={'20px'}/>
                        <span>ESPAÑOL</span>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    </nav>
}

export default Header