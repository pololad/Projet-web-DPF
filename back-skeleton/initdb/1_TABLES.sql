drop table students;
drop table majors;
drop table courses;
drop table student_course;
drop table clients;
drop table status;
drop table offers;
drop table client_offer;


create table students
(
    id SERIAL PRIMARY KEY,
    first_name TEXT not null,
    last_name TEXT not null,
    birthdate date null,
    major_id int null,
    image bytea null
);

create table majors
(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    description TEXT not null
);

create table courses
(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    hours int not null
);

create table student_course
(
    id SERIAL PRIMARY KEY,
    student_id int not null,
    course_id int not null
);

CREATE table clients(
    id SERIAL PRIMARY KEY,
    first_name TEXT not null,
    last_name TEXT not null,
    birthdate date null,
    status_id int not null
);


create table status(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

create table client_offer(
    id SERIAL PRIMARY KEY,
    offer_id int not null,
    client_id int not null

);
create table offers(
    id SERIAL PRIMARY KEY,
    difficulty TEXT not null,
    begin_date date null,
    ending_date date null
)




