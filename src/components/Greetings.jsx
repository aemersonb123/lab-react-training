import React from 'react';

function Greetings({ lang, children}) {
const translation = { 
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
    de: "Hallo"
};


    return (
        <div className='greeting'>
           {translation[lang]} {children}
        </div>
    );
}

export default Greetings;