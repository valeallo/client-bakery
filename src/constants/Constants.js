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

export const FETCH_PASTRIES_API = process.env.REACT_APP_API_BASE_URL + "/pastries";
export const LOGIN_API =  process.env.REACT_APP_API_BASE_URL + "/login";
