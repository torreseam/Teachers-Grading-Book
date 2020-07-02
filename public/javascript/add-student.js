async function newFormHandler(event) {
    event.preventDefault();


    const title = document.querySelector('input[name="student-Name"]').value;
    // const course_url = document.querySelector('input[name="submit"]').value;
   

    const response = await fetch(`/api/students`, {
        method: 'POST',
        body: JSON.stringify({
            name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-course-form').addEventListener('submit', newFormHandler);