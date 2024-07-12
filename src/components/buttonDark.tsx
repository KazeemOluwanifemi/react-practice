import React, { ReactNode } from 'react';

interface ButtonProps{
    children: ReactNode;
}


export default function ButtonDark({children}: ButtonProps){
    return <button className="w-button-width px-6 py-4 text-base rounded-full border-0 text-brand-yellow bg-dark-three font-Exo">{children}</button>;
}