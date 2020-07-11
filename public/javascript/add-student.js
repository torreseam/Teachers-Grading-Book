async function addStudentFormHandler(event) {
    event.preventDefault();
  
    const student_name = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
       window.location.toString().split('/').length -1
    ];
  
    console.log(comment_text, post_id);
  
    if (comment_text) {
       const response = await fetch('/api/students', {
          method: 'POST',
          body: JSON.stringify({
             post_id,
             comment_text
          }),
          headers: {
             'Content-Type': 'application/json'
          }
       });
  
       if (response.ok) {
          document.location.reload();
       } else {
          alert(response.statusText);
       }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', addStudentFormHandler);