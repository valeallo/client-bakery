export const NavbarLinks=[
   
    {
       
    }
]


export const FooterLinksOne = [
    {
        id: 'about-us',
        title: 'About Us',
        link: '/about-us',
    },
    {
        id: 'contacts',
        title: 'Our Contacts',
        link: '/',
    },
    
    {
        id: 'privacy',
        title: 'Privacy',
        link: '/',
    }
]

export const FETCH_PASTRIES_START = 'FETCH_PASTRIES_START';
export const FETCH_PASTRIES_SUCCESS = 'FETCH_PASTRIES_SUCCESS';
export const FETCH_PASTRIES_FAILURE = 'FETCH_PASTRIES_FAILURE';

const DOT_ENV = process.env.REACT_APP_API_BASE_URL;
export const FETCH_PASTRIES_API = DOT_ENV + "/pastries";
export const LOGIN_API =  DOT_ENV + "/login";
