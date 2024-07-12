import React from 'react';

export default function Footer(){
    return <footer className='bg-brand-yellow w-max-full footer-props'>
    <div className='h-footer-height gap-footer-gap1 flex-wrap justify-between '>
        <div className='w-products-width h-products-height gap-6 basis-1/4'>
            <div className='w-products-width gap-products-gap h-8'>
                <h3 className='font-Playfair text-dark-three products'>PRODUCTS</h3>
            </div>
            <div className='products-listing w-products-width h-products-listing-h gap-footer-gap1'>
                <div className='gap-4 grid font-Exo products-ls'>
                    <p className='gap-products-gap'>Rackets</p>
                    <p className='gap-products-gap'>Bags</p>
                    <p className='gap-products-gap'>Apparels</p>
                    <p className='gap-products-gap'>Balls</p>
                    <p className='gap-products-gap'>Gears</p>
                </div>
            </div>
        </div>
    </div>
    </footer>
        

   
}