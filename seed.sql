use teacher_grade_book_db;

insert into teacher (
    (name, email, password)
    values('Mary Shelley', 'mshelley@franklinhs.com', 'frankenstein')
);

insert into student (name) values('Mary Andrews');
insert into student (name) values('Tom Swith');
insert into student (name) values('Wonder Women');
insert into student (name) values('Super Man');
insert into student (name) values('Hulk Hogan');
insert into student (name) values('Captain America');
insert into student (name) values('Green Lantern');
insert into student (name) values('Darth Vader');
insert into student (name) values('Princes Lea');
insert into student (name) values('Liz Taylor');

insert into roster (id, student_id) values(1, 1);
insert into roster (id, student_id) values(1, 2);
insert into roster (id, student_id) values(1, 3);
insert into roster (id, student_id) values(1, 4);
insert into roster (id, student_id) values(1, 5);
insert into roster (id, student_id) values(1, 6);
insert into roster (id, student_id) values(1, 7);
insert into roster (id, student_id) values(1, 8);
insert into roster (id, student_id) values(1, 9);
insert into roster (id, student_id) values(1, 10);

insert into course (name, teacher_id, roster_id, department)
    values('Biology', 1, 1, 'Science');
