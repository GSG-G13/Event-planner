BEGIN;
DROP TABLE IF EXISTS users, attendees,events;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(20) NOT NULL
);
CREATE TABLE events(
    id SERIAL PRIMARY KEY, 
    event_name  VARCHAR(50),
    location VARCHAR(100),
    date DATE,
    details VARCHAR(255)
);
CREATE TABLE attendees(
    id SERIAL PRIMARY KEY,
    user_id Integer,
    event_id Integer,
    foreign key (user_id) references users (id),
    foreign key (event_id) references events (id)
);
INSERT INTO users(name,password) VALUES 
('Eman', '123456'),
 ('Nada', '123416'),
 ('Momen', '123996');
INSERT INTO events(event_name,location,date,details) VALUES 
('js session', 'Gaza','2020-12-2','js session here in gaza'),
('js session', 'Gaza','2020-12-2','js session here in gaza'),
('css session', 'Gaza','2020-12-2','js session here in gaza'),
('html session', 'Gaza','2020-12-2','js session here in gaza'),
('pg session', 'Gaza','2020-12-2','js session here in gaza'),
('pg session', 'Gaza','2020-12-2','js session here in gaza'),
('pg session', 'Gaza','2020-12-2','js session here in gaza');

INSERT INTO attendees (user_id,event_id) VALUES 
(1,1),
(2,1),
(3,1),
(1,2),
(2,2),
(3,2),
(1,3),
(2,3),
(3,3);


COMMIT;