import express from "express"
import { KnexTodoRepository } from "./src/services/todo_services"
import { TodoController } from "./src/controllers/todo_controller"
import bodyParser from "body-parser"

// 
const app = express()
const port = 3500
// 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const todoController = new TodoController()

app.get("/", todoController.fetchTodo)
app.post('/todo', todoController.createTodo)
app.get('/todo/:id', todoController.getTodoId)
app.delete('/todo/:id', todoController.deleteTodoById)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})