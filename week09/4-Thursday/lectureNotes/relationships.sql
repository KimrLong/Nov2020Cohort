-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(25)
-- );


-- CREATE TABLE articles(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(150),
--     author_id integer REFERENCES author(id)
-- );


-- INSERT INTO author VALUES
-- (DEFAULT, 'Adam'),
-- (DEFAULT, 'Matt C'),
-- (DEFAULT, 'Zach'),
-- (DEFAULT, 'Kim'),
-- (DEFAULT, 'Ian'),
-- (DEFAULT, 'Matt R'),
-- (DEFAULT, 'Joe'),
-- (DEFAULT, 'Ally'),
-- (DEFAULT, 'Cedael'),
-- (DEFAULT, 'Andrea'),
-- (DEFAULT, 'Claude'),
-- (DEFAULT, 'Jacob'),
-- (DEFAULT, 'Layne'),
-- (DEFAULT, 'Matt P'),
-- (DEFAULT, 'Kanny'),
-- (DEFAULT, 'Michah'),
-- (DEFAULT, 'Jordan');

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS PROTO', 5),
-- (DEFAULT, 'JS Prom', 2),
-- (DEFAULT, 'Express Rooutes', 10),
-- (DEFAULT, 'Styling', 12),
-- (DEFAULT, 'API call', 11),
-- (DEFAULT, 'Python PG', 13),
-- (DEFAULT, 'Obj orienstes JS', 9),
-- (DEFAULT, 'Nestes loops', 7),
-- (DEFAULT, 'Preparing for Tech interview', 14),
-- (DEFAULT, 'Why I went to bootcamp', 1),
-- (DEFAULT, 'Coding in Romanian', 6),
-- (DEFAULT, 'Fizz Buzz', 5),
-- (DEFAULT, 'Merge sort', 7),
-- (DEFAULT, 'Fibinachi', 3),
-- (DEFAULT, 'The beststsss', 4);

-- INSERT INTO articles VALUES(DEFAULT, 'Some other article', NULL);

-- SELECT articles.id, articles.title, author.name
-- FROM articles
-- INNER JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name
-- FROM articles
-- FULL OUTER JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name
-- FROM articles
-- RIGHT JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name
-- FROM articles
-- LEFT JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name
-- FROM articles
-- FULL OUTER JOIN author 
-- ON articles.author_id = author.id;




-- CREATE TABLE groups (
--     id SERIAL PRIMARY KEY,
--     name varchar(100)
-- );
-- CREATE TABLE member (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );
-- CREATE TABLE membership(
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups (id),
--     member_id integer REFERENCES member (id)
-- );
-- INSERT INTO groups VALUES 
-- (DEFAULT, 'Atlanta JavaScript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');
-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');
-- INSERT INTO membership VALUES 
-- (DEFAULT, 1, 9),
-- (DEFAULT, 2, 9),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 4, 9),
-- (DEFAULT, 1, 2),
-- (DEFAULT, 2, 2),
-- (DEFAULT, 2, 3),
-- (DEFAULT, 2, 4),
-- (DEFAULT, 2, 5),
-- (DEFAULT, 3, 6),
-- (DEFAULT, 3, 7),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 4, 9);

-- SELECT *
-- FROM groups INNER JOIN membership
-- ON groups.id = membership.group_id
-- INNER JOIN member 
-- ON membership.group_id = member.id


--cartesian join
-- CREATE TABLE blouses(
--     id SERIAL PRIMARY KEY,
--     description varchar(100)
-- );
-- INSERT INTO blouses VALUES
-- (DEFAULT, 'red polka dots'),
-- (DEFAULT, 'yellow sun flowers'),
-- (DEFAULT, 'white with brown buttons'),
-- (DEFAULT, 'coding t-shirt');
-- CREATE TABLE pants(
--     id SERIAL PRIMARY KEY,
--     description varchar(100)
-- );
-- INSERT INTO pants VALUES
-- (DEFAULT, 'blue jeans'),
-- (DEFAULT, 'black jeans'),
-- (DEFAULT, 'brown bell bottoms'),
-- (DEFAULT, 'blue slacks');
-- CREATE TABLE shoes(
--     id SERIAL PRIMARY KEY,
--     description varchar(100)
-- );
-- INSERT INTO shoes VALUES
-- (DEFAULT, 'black jordans'),
-- (DEFAULT, 'red high heels'),
-- (DEFAULT, 'yellow flip flops'),
-- (DEFAULT, 'brown birkenstock');

SELECT blouses.descriptons as blouses, pants.description as pants, shoes.description,
FROM blouses, pants, shoes;