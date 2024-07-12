import React, { ReactNode } from 'react';

interface ButtonProps{
    children: ReactNode;
}


export default function Button({children}: ButtonProps){
    return <button className="w-button-width px-6 py-4 text-base  rounded-full border-0 bg-brand-yellow text-dark-three font-">{children}</button>;
}