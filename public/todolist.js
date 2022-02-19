$(function(){
    let newtodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function()
    {
        let newTodo = newtodoBox.val()
        $.post('/todos/',
                {task: newTodo},
                function(data){
                    todoList.empty()
                    for(todo of data)
                    {
                        todoList.append("<li>"+todo.task+"</li>")
                    }
                }
                )
    })
})