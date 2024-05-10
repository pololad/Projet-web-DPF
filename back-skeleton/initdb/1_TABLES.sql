drop table students;
drop table student_offer;

drop table status;
drop table offers;



create table students
(
    id SERIAL PRIMARY KEY,
    first_name TEXT not null,
    last_name TEXT not null,
    birthdate date null,
    status_id int null,
    password text not null,
    image bytea null
);



create table student_offer
(
    id SERIAL PRIMARY KEY,
    student_id int not null,
    offer_id int not null
);


create table status(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

create table offers(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    difficulty TEXT not null,
    begin_date date null,
    ending_date date null
)




