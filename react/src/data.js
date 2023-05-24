let companies = [
    {
    id: 1,
    company: 'bestbuy',
	homepage:'bestbuy.com',
	cFounding: 1966,
	wFounding: 1998,
    logo: 'bestbuy_logo',
    price: '$'
    }, 
    {
    id: 2,
    company: 'walmart',
	homepage:'walmart.com',
	cFounding: 1962,
	wFounding: 2000,
	logo: 'walmart_logo',
    price: '$'
    }, 
    {
    id: 3,
    company: 'papajohns',
	homepage: 'papajohns.com',
	cFounding: 1984,
	wFounding: 2001,
	logo: 'papajohns_logo',
    price: '$'
    }, 
    {
    id: 4,
    company: 'reddit',
	homepage: 'reddit.com',
	cFounding: 2005,
	wFounding: 2005,
	logo: 'reddit_logo',
    price: '$'
    }, 
    {
    id: 5,
    company: 'youtube',
	homepage: 'youtube.com',
	cFounding: 2005,
	wFounding: 2005,
	logo: 'youtube_logo',
    price: '$'
    }, 
    {
    id: 6,
    company: 'google',
	homepage: 'google.com',
	cFounding: 1998,
	wFounding: 1998,
	logo: 'google_logo',
    price: '$'
    }, 
    {
    id: 7,
    company: 'wikipedia',
	homepage: 'wikipedia.org',
	cFounding: 2001,
	wFounding: 2001,
	logo: 'wikipedia_logo',
    price: '$'
    }, 
    {
    id: 8,
    company: 'twitter',
	homepage: 'twitter.com',
	cFounding: 2006,
	wFounding: 2006,
	logo: 'twitter_logo',
    price: '$'
    }, 
    {
    id: 9,
    company: 'facebook',
	homepage: 'facebook.com',
	cFounding: 2004,
	wFounding: 2004,
	logo: 'facebook_logo',
    price: '$'
    }, 
    {
    id: 10,
    company: 'cracked',
	homepage: 'cracked.com',
	cFounding: 1959,
	wFounding: 2005,
	logo: 'cracked_logo',
    price: '$'
    }, 
    {
    id: 11,
    company: 'collegehumor',
	homepage: 'collegehumor.com',
	cFounding: 1999,
	wFounding: 1999,
	logo: 'collegehumor_logo',
    price: '$'
    }, 
    {
    id: 12,
    company: 'netflix',
	homepage: 'netflix.com',
	cFounding: 1997,
	wFounding: 2007,
	logo: 'netflix_logo',
    price: '$'
    }
]

export function getCompanies() {
    return companies
}

export const getCompany =(id)=> {
    return companies.find(companies => companies.id === id)
}