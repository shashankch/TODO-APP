// to get notification div container
const target = document.getElementById('notify');

// to get add task button
const task = document.getElementById('taskadd');

// setting notification to invisible
target.style.display = 'none';

// adding event listener to add task button to show alert msg when task is added.
task.addEventListener('click', function (event) {
  target.style.display = 'block';

  setTimeout(() => {
    target.style.display = 'none';
  }, 1200);
});
