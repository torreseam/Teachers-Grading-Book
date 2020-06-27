var data = [
    {
    "student_name": "Martita",
    "Homework": '50',
    "Quiz": '98',
    "Test": '45',
  },
  {
    "student_name": "Brenda",
    "Homework": '50',
    "Quiz": '98',
    "Test": '45',
  }
]

  var container = document.getElementById('student')
  var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: false,
    colHeaders: ['Student name', 'Homework', 'Quiz', 'Test'],
    columnSorting: true,
    sortIndicator: true
  })