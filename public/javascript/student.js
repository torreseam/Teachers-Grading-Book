async function commentFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const course_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(name, course_id);
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);