window.onload = function(){
    const ul = document.createElement("ul");
    let btn = document.getElementById("btn");
    const entrada = document.getElementById("entrada");

    btn.addEventListener('click', function(){

        const tareas = entrada.value;

        if(tareas != ""){
            
            const li = document.createElement("li");
            const txt = document.createTextNode(tareas);
            li.appendChild(txt);
            ul.appendChild(li);
            entrada.value = '';
        }
        else{
            alert("Agregue una tarea para seguir!");
        }
    })

    document.body.appendChild(ul);
    
}

