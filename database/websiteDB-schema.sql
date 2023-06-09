DROP DATABASE IF EXISTS `websiteDB`;
CREATE DATABASE `websiteDB`;
USE `websiteDB`;

CREATE TABLE founder (
    founder_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_founder PRIMARY KEY (founder_id)
);

CREATE TABLE owner (
    owner_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_owner PRIMARY KEY (owner_id)
);

CREATE TABLE website (
    website_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    website VARCHAR(20) NOT NULL,
    homepage VARCHAR(25) NOT NULL,
    company_est_date YEAR,
    website_est_date YEAR,
    logo_img TINYTEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_website PRIMARY KEY (website_id)
);

CREATE TABLE founder_site(
    founder_id TINYINT UNSIGNED  NOT NULL,
    website_id TINYINT UNSIGNED  NOT NULL,
    PRIMARY KEY (founder_id, website_id),
    CONSTRAINT fk_founder FOREIGN KEY (founder_id) REFERENCES founder (founder_id),
    CONSTRAINT pk_website FOREIGN KEY (website_id) REFERENCES website (website_id)
);

CREATE TABLE owner_site(
    owner_id TINYINT UNSIGNED  NOT NULL,
    website_id TINYINT UNSIGNED  NOT NULL,
    PRIMARY KEY (owner_id, website_id),
    CONSTRAINT fk_cl_owner FOREIGN KEY (owner_id) REFERENCES owner (owner_id),
    CONSTRAINT pk_website FOREIGN KEY (website_id) REFERENCES website (website_id)
);

CREATE TABLE homepage(
    homepage_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    homepage VARCHAR(25) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_homepage PRIMARY KEY (homepage_id)
);

ALTER TABLE website
ADD COLUMN price TINYTEXT;

alter table `website` change column `price` `price` varchar(10);

ALTER TABLE website
ADD COLUMN image TINYTEXT;