async function deleteFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    await fetch(`/api/courses/${id}`, {
        method: 'DELETE'
     });
}
  
  document.querySelector('.delete-course-btn').addEventListener('click', deleteFormHandler);