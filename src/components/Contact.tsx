import { useState, useEffect } from 'react';
import { selectedLanguage } from '../services/languageService.js';
import { useStore } from '@nanostores/react';

const Contact = () => {
    const $selectedLanguage = useStore(selectedLanguage)

    const [nameValue, setNameValue] = useState('');
    const [msgValue, setMsgValue] = useState('');

    const handleNameChange = (event: any) => {
        const newNameValue = encodeURIComponent(event.target.value);
        setNameValue(newNameValue);
    };

    const handleMsgChange = (event: any) => {
        const newMsgValue = encodeURIComponent(event.target.value);
        setMsgValue(newMsgValue);
    };

    const handleButtonClick = () => {
        const subject = encodeURIComponent('Portfolio Contact');
        const body = `Name: ${nameValue}%0AMessage: ${msgValue}`;
        const mailtoLink = `mailto:dangelo.diego.gabriel@gmail.com?subject=${subject}&body=${body}`;

        window.open(mailtoLink, '_blank');
    };

    useEffect(() => {
        const submitBtn = document.querySelector('#submit-msg');

        const handleClick = (e: any) => {
            e.preventDefault();
            handleButtonClick();
        };

        submitBtn?.addEventListener('click', handleClick);

        return () => submitBtn?.removeEventListener('click', handleClick)
    }, [nameValue, msgValue]);

    return (
        <div id="contact" className="rounded-lg w-fit bg-transparent m-auto flex flex-col gap-10 p-10 justify-center h-screen">
            <div>
                <h2 className="text-center">{$selectedLanguage.contact_me}</h2>
            </div>
            <form className="flex flex-col gap-10">
                <div className="placeholder-container">
                    <input
                        id="name-input"
                        required
                        placeholder=""
                        className="w-full mt-3 bg-transparent border-b-2 border-rose-500 focus:outline-none"
                        type="text"
                        onChange={handleNameChange}
                    />
                    <label htmlFor="name-input" className="placeholder">
                        <span>{$selectedLanguage.contact_me_name}</span>
                    </label>
                    <div className="bottom-bar"></div>
                </div>
                <div className="placeholder-container">
                    <textarea
                        id="msg-input"
                        required
                        placeholder=""
                        className="resize-none h-[39px] bg-transparent border-b-2 border-rose-500 focus:outline-none"
                        onChange={handleMsgChange}
                    />
                    <label htmlFor="msg-input" className="placeholder">
                        <span>{$selectedLanguage.contact_me_msg}</span>
                    </label>
                    <div className="bottom-bar"></div>
                </div>
                <a id="submit-msg" href="#">
                    {$selectedLanguage.contact_me_btn}
                </a>
            </form>
        </div>
    );
};

export default Contact;