CREATE TABLE blog(
    id SERIAL NOT NULL PRIMARY KEY,
    description varchar(1000) NOT NULL

);

INSERT INTO blog VALUES 
(DEFAULT,'testing'),
(DEFAULT,'another test');