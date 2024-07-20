import React from 'react';

// import logo from '../';

// interface navbarItems{
//     children: ReactNode;
// }


export default function Navbar(){
    return <header className='bg-dark-three px-20 h-header-height flex items-center '>
        <div className='logo-nd-nav-options flex items-center gap-navbar-gap'>
            <div className='flex nav-bar'>
                <div className='flex logo-size my-0-0 justify-center  items-center'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo-yellow.png'} alt = "logo"className='w-logo-width  h-logo-height'/>
                    <h2 className='text-brand-yellow font-Playfair
                    font-semibold font-'>SmashZone</h2>
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


            <div className='flex icons justify-end cursor-pointer'>
                <img src={process.env.PUBLIC_URL + '/assets/images/user-white.png'} alt="user-icon" />
                <img src={process.env.PUBLIC_URL + '/assets/images/search-solid-white.png'} alt="search-icon" />
                <img src={process.env.PUBLIC_URL + '/assets/images/shopping-bag-white.png'} alt="shopping-bag-icon" />
            </div>
        </div>
    </header>
}

