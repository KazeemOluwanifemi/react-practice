import React from 'react';

// interface navbarItems{
//     children: ReactNode;
// }


export default function Navbar(){
    return <header className='bg-dark-two px-20 h-header-height flex items-center '>
        <div className='logo-nd-nav-options flex items-center gap-navbar-gap'>
            <div className='flex nav-bar'>
                <div className='flex logo-size my-0-0 justify-center  items-center'>
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logotype and logomark" className='w-logo-width   h-logo-height'/>
                    <h2 className='text-brand-yellow font-Playfair
                    font-bold'>SmashZone</h2>
                </div>

                <nav className='text-white font-Exo place-content-evenly justify-between'>
                 <ul className='flex nav-list '>
                    <li className='max-w-fit'><button>RACKETS</button></li>
                    <li className='max-w-fit'><button>BAGS</button></li>
                    <li className='max-w-fit'><button>APPAREL</button></li>
                    <li className='max-w-fit'><button>BALLS</button></li>
                    <li className='max-w-fit'><button>GEARS</button></li>
                 </ul>
                </nav>

            </div>


            <div className='w-icon-width h-icon-height flex icons justify-end cursor-pointer'>
                <img src={process.env.PUBLIC_URL + '/user-white.png'} alt="user-icon" />
                <img src={process.env.PUBLIC_URL + '/search-solid-white.png'} alt="search-icon" />
                <img src={process.env.PUBLIC_URL + '/shopping-bag-03-white.png'} alt="shopping-bag-icon" />
            </div>
        </div>
    </header>
}