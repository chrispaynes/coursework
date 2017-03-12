CREATE DATABASE internships;

--INSERT YOUR USERNAME AND DB PASSWORD
GRANT ALL PRIVILEGES ON *.* TO 'MY USERNAME'@'%' IDENTIFIED BY 'MY USERNAME PASSWORD';

USE internships;

CREATE TABLE opportunities (
  opportunityID SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(40), 
  city VARCHAR(25),
  start_date DATE,
  end_date DATE,
  position VARCHAR(30),
  description VARCHAR(250)
);

CREATE TABLE interns (
  internID SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(40), 
  password_md5 VARCHAR(32),
  first VARCHAR(40),
  last VARCHAR(40)
);

CREATE TABLE assigned_opportunities (
  opportunityID SMALLINT,
  internID SMALLINT,
  date_selected DATE,
  date_approved DATE
);

INSERT INTO opportunities
(company, city, start_date, end_date, position, description)
VALUES
  ('Company1', 'City1', '2017-01-01', '2018-01-01', 'Position1', 'Description1'),
  ('Company2', 'City2', '2017-02-01', '2018-02-01', 'Position2', 'Description2'),
  ('Company3', 'City3', '2017-03-01', '2018-03-01', 'Position3', 'Description3'),
  ('Company4', 'City4', '2017-04-01', '2018-04-01', 'Position4', 'Description4'),
  ('Company5', 'City5', '2017-05-01', '2018-05-01', 'Position5', 'Description5');
