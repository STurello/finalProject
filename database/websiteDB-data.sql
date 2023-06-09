INSERT INTO website (
    website,
    homepage,
    company_est_date,
    website_est_date,
    logo_img
)
VALUES (
    'bestbuy',
	'bestbuy.com',
	1966,
	1998,
    'bestbuy_logo'
), (
    'walmart',
	'walmart.com',
	1962,
	2000,
	'walmart_logo'
), (
    'papajohns',
	'papajohns.com',
	1984,
	2001,
	'papajohns_logo'
), (
    'reddit',
	'reddit.com',
	2005,
	2005,
	'reddit_logo'
), (
    'youtube',
	'youtube.com',
	2005,
	2005,
	'youtube_logo'
), (
    'google',
	'google.com',
	1998,
	1998,
	'google_logo'
), (
    'wikipedia',
	'wikipedia.org',
	2001,
	2001,
	'wikipedia_logo'
), (
    'twitter',
	'twitter.com',
	2006,
	2006,
	'twitter_logo'
), (
    'facebook',
	'facebook.com',
	2004,
	2004,
	'facebook_logo'
), (
    'cracked',
	'cracked.com',
	1959,
	2005,
	'cracked_logo'
), (
    'collegehumor',
	'collegehumor.com',
	1999,
	1999,
	'collegehumor_logo'
), (
    'netflix',
	'netflix.com',
	1997,
	2007,
	'netflix_logo'
);

INSERT INTO owner (first_name, last_name)
VALUES ('barry', 'corie'),
('walton', 'alice'),
('walton', 'james'),
('walton', 'sam'),
('lynch', 'robert'),
('huffman', 'steve'),
('mohan', 'neil'),
('pichai', 'sundar'),
('iskander', 'mayana'),
('musk', 'elon'),
('zuckerberg', 'mark'),
('nizri', 'jacob'),
('reich', 'sam'),
('hastings', 'reed'),
('peters', 'greg'),
('sarandos', 'ted');

INSERT INTO founder (first_name, last_name)
VALUES ('schulze', 'richard'),
('wheeler', 'james'),
('walton', 'sam'),
('walton', 'james'),
('schnatter', 'john'),
('huffman', 'steve'),
('ohanian', 'alexis'),
('swartz', 'aaron'),
('chen', 'steve'),
('hurley', 'chad'),
('karim', 'jawed'),
('brin', 'sergey'),
('page', 'larry'),
('sanger', 'larry'),
('wales', 'jimmy'),
('dorsey', 'jack'),
('glass', 'noah'),
('stone', 'biz'),
('williams', 'evan'),
('hughes', 'chris'),
('mccollum', 'andrews'),
('moskovitz', 'dustin'),
('saverin', 'eduardo'),
('zuckerberg', 'mark'),
('brodsky', 'sol'),
('abramson', 'josh'),
('veen', 'ricky'),
('hastings', 'reed'),
('randolph', 'marc');

INSERT INTO homepage (homepage)
VALUES ('bestbuy.com'),
('walmart.com'),
('papajohns.com'),
('reddit.com'),
('youtube.com'),
('google.com'),
('wikipedia.org'),
('twitter.com'),
('facebook.com'),
('cracked.com'),
('collegehumor.com'),
('netflix.com');

/*
INSERT INTO website (price)
VALUES ("$500,000"),
("$900,000"),
("$500,000"),
("$700,000"),
("$300,000"),
("$1,000,000"),
("$10,000"),
("$5"),
("$10"),
("$200"),
("$500"),
("$600,000");
*/

UPDATE website 
SET price = '$500,000';

UPDATE website 
SET price = '$900,000'
WHERE website_id = 2;

UPDATE website 
SET price = '$500,000'
WHERE website_id = 3;

UPDATE website 
SET price = '$700,000'
WHERE website_id = 4;

UPDATE website
SET price = '$300,000'
WHERE website_id = 5;

UPDATE website
SET price = '$1,000,000'
WHERE website_id = 6;

UPDATE website
SET price = '$10,000'
WHERE website_id = 7;

UPDATE website
SET price = '$5'
WHERE website_id = 8;

UPDATE website
SET price = '$10'
WHERE website_id = 9;

UPDATE website
SET price = '$200'
WHERE website_id = 10;

UPDATE website
SET price = '$500'
WHERE website_id = 11;

UPDATE website
SET price = '$600,000'
WHERE website_id = 12;

UPDATE website
SET image = 'Best_Buy_Logo.png'
WHERE website_id = 1;

UPDATE website
SET image = 'Walmart_logo.png'
WHERE website_id = 2;

UPDATE website
SET image = 'Papa_Jogns_Logo.png'
WHERE website_id = 3;

UPDATE website
SET image = 'reddit_logo.png'
WHERE website_id = 4;

UPDATE website
SET image = 'YouTube_Logo.png'
WHERE website_id = 5;

UPDATE website
SET image = 'Google_logo.png'
WHERE website_id = 6;

UPDATE website
SET image = 'Wikipedia_logo.png'
WHERE website_id = 7;

UPDATE website
SET image = 'Twitter_logo.webp'
WHERE website_id = 8;
UPDATE website

UPDATE website
SET image = 'Facebook_logo.png'
WHERE website_id = 9;

UPDATE website
SET image = 'cracked_logo.png'
WHERE website_id = 10;

UPDATE website
SET image = 'CollegeHumor_logo.webp'
WHERE website_id = 11;

UPDATE website
SET image = 'Netflix_logo.jpg'
WHERE website_id = 12;

UPDATE website
SET image ='Papa_Johns_Logo.png'
WHERE website_id = 3;