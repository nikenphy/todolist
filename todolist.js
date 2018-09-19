let todos = [];
const listDOM = document.getElementById('list');
const inputDOM = document.getElementById('input-todo');
const addDOM = document.getElementById('add-button');

const data = JSON.parse(localStorage.getItem('todos'));
// console.log("DATA: " + data);
todos = data;

function render() {
	let index = 0;
	listDOM.innerHTML = "";
	while(index < todos.length) {
		console.log(index)
		// listDOM.innerHTML += '<li><input type="checkbox">' + todos[index] + ' <button onclick="hapus('+index+')">Delete</button></li>'
		listDOM.innerHTML += 
		'<div class="alert alert-warning alert-dismissible fade show" role="alert"><input type="checkbox">' 
		+ todos[index] +
		'<button type="button" onclick="hapus('+index+')" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'

		index = index + 1;
	}
}

render();

addDOM.addEventListener('click', function() {
	const todo = inputDOM.value;

	if (todo == "") {
         return;
    } else {
		todos.push(todo);
		console.log(todos);
		render();
		localStorage.setItem('todos', JSON.stringify(todos)); 
	}
})

function hapus(p) {
	console.log(p)
	todos.splice(p,1)
	render();
	localStorage.setItem('todos', JSON.stringify(todos));
}
