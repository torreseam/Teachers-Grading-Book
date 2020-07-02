use grade_book_db;

insert into user
    (username, email, password)
    values('Mary Shelley', 'mshelley@franklinhs.com', 'frank');

insert into course (title, user_id, course_url)
    values('Biology', 1, 'Science');


insert into student (name) values('Mary Andrews');
insert into student (name) values('Tom Swift');
insert into student (name) values('Barbara Johnson');
insert into student (name) values('Rick Shaw');
insert into student (name) values('Mike Thompson');
insert into student (name) values('Carol Birdsong');
insert into student (name) values('Sam Brown');
insert into student (name) values('Joan Simpson');
insert into student (name) values('Leslie Patterson');
insert into student (name) values('Chris Steward');

insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
/*
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(1, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
*/


insert into grade (student_id, course_id, assignment, score) values(1,1,'Quiz',80);
insert into grade (student_id, course_id, assignment, score) values(1,1,'Homework',88);
insert into grade (student_id, course_id, assignment, score) values(1,1,'Tests',78);

insert into grade (student_id, course_id, assignment, score) values(3,1,'Quiz',68);
insert into grade (student_id, course_id, assignment, score) values(3,1,'Homework',72);
insert into grade (student_id, course_id, assignment, score) values(3,1,'Tests',88);

insert into grade (student_id, course_id, assignment, score) values(5,1,'Quiz',77);
insert into grade (student_id, course_id, assignment, score) values(5,1,'Homework',62);
insert into grade (student_id, course_id, assignment, score) values(5,1,'Tests',88);

insert into grade (student_id, course_id, assignment, score) values(7,1,'Quiz',44);
insert into grade (student_id, course_id, assignment, score) values(7,1,'Homework',80);
insert into grade (student_id, course_id, assignment, score) values(7,1,'Tests',75);

insert into grade (student_id, course_id, assignment, score) values(9,1,'Quiz',91);
insert into grade (student_id, course_id, assignment, score) values(9,1,'Homework',100);
insert into grade (student_id, course_id, assignment, score) values(9,1,'Tests',97);

/*
insert into grade (student_id, course_id, assignment, score) values(5,1,'20200112H',91);
insert into grade (student_id, course_id, assignment, score) values(5,1,'20200114H',85);
insert into grade (student_id, course_id, assignment, score) values(7,1,'20200112H',77);
insert into grade (student_id, course_id, assignment, score) values(7,1,'20200114H',88);
insert into grade (student_id, course_id, assignment, score) values(9,1,'20200112H',52);
insert into grade (student_id, course_id, assignment, score) values(9,1,'20200114H',62);
/*
insert into grade (student_id, course_id, assignment, score) values(2,1,'20200112H',70);
insert into grade (student_id, course_id, assignment, score) values(2,1,'20200114H',78);
insert into grade (student_id, course_id, assignment, score) values(4,1,'20200112H',78);
insert into grade (student_id, course_id, assignment, score) values(4,1,'20200114H',82);
insert into grade (student_id, course_id, assignment, score) values(6,1,'20200112H',95);
insert into grade (student_id, course_id, assignment, score) values(6,1,'20200114H',85);
insert into grade (student_id, course_id, assignment, score) values(8,1,'20200112H',67);
insert into grade (student_id, course_id, assignment, score) values(8,1,'20200114H',78);
insert into grade (student_id, course_id, assignment, score) values(10,1,'20200112H',52);
insert into grade (student_id, course_id, assignment, score) values(10,1,'20200114H',82);
*/