 const form = document.getElementById("form");
 const input = document.getElementById("input");
 const ul = document.getElementById("ul");

 const todos = JSON.parse(localStorage.getItem("todos"));

 if(todos) {
   todos.forEach(todo => {
     add(todo);
   })
 }

 form.addEventListener("submit", function (event) {
   //リロード中断コード
   event.preventDefault();
   add();
 });

 function add(todo) {
   let todoText = input.value;;

if(todo) {
  todoText = todo.text;
}

//生成
   if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    //リストに追加
    li.classList.add("list-group-item"); 
    // リロード対策
   if(todo && todo.compleated){
    li.classList.add("text-decoration-line-through");
}

    li.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      li.remove();
      saveDate();
    });

    li.addEventListener("click", function() {
      li.classList.toggle("text-decoration-line-through");
      saveDate();
    });

    ul.appendChild(li);
    input.value = "";
    saveDate();
   }

   function saveDate() {
     const lists = document.querySelectorAll("li");
     let todos = [];

     lists.forEach(list => {
       let todo = {
         text: list.innerText,
         compleated: list.classList.contains("text-decoration-line-through")
       };
       todos.push(todo);
     })
     localStorage.setItem("todos", JSON.stringify(todos));

   }
 }