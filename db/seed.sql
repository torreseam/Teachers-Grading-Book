use teacher_grade_book_db;

insert into teacher (
    (name, email, password)
    values('Mary Shelley', 'mshelley@franklinhs.com', 'frankenstein')
);

insert into student (name) values('Mary Andrews');
insert into student (name) values('Tom Swith');
insert into student (name) values('Barbara Johnson');
insert into student (name) values('Rick Shaw');
insert into student (name) values('Mike Thompson');
insert into student (name) values('Carol Birdsong');
insert into student (name) values('Sam Brown');
insert into student (name) values('Joan Simpson');
insert into student (name) values('Leslie Patterson');
insert into student (name) values('Chris Steward');

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
