use grade_book_db;

insert into teacher 
    (name, email, password)
    values('Mary Shelley', 'mshelley@franklinhs.com', 'frank');

insert into course (name, teacher_id, department)
    values('Biology', 1, 'Science');
insert into course (name, teacher_id, department)
    values('Calculus', 1, 'Mathematics');

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

insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(2, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(2, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into courseStudents (course_id, student_id, createdAt, updatedAt) values(2, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



insert into grade (student_id, course_id, assignment, score) values(1,1,'20200112H',80);
insert into grade (student_id, course_id, assignment, score) values(1,1,'20200114H',88);
insert into grade (student_id, course_id, assignment, score) values(3,1,'20200112H',68);
insert into grade (student_id, course_id, assignment, score) values(3,1,'20200114H',72);
insert into grade (student_id, course_id, assignment, score) values(5,1,'20200112H',91);
insert into grade (student_id, course_id, assignment, score) values(5,1,'20200114H',85);
insert into grade (student_id, course_id, assignment, score) values(7,1,'20200112H',77);
insert into grade (student_id, course_id, assignment, score) values(7,1,'20200114H',88);
insert into grade (student_id, course_id, assignment, score) values(9,1,'20200112H',52);
insert into grade (student_id, course_id, assignment, score) values(9,1,'20200114H',62);
