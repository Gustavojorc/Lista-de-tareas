document.getElementById('textform').addEventListener('submit', function(event){
    event.preventDefault();

    const tareas = document.getElementById('tareas').value.trim();

    if (tareas !== "") {

        const newitem = document.createElement('li');
        newitem.textContent = tareas;

        newitem.addEventListener('click', function() {
            newitem.classList.toggle('completed');
        });

        document.getElementById('textlist').appendChild(newitem);

        document.getElementById('tareas').value = "";
    }
})