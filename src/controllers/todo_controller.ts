import { Request, Response } from "express"
import { ITodoDto } from "../dto/todo_dto"
import { KnexTodoRepository } from "../services/todo_services"


export class TodoController {
    public async fetchTodo(req: Request, res: Response) {
        const todoRepository = new KnexTodoRepository()
        const todo = await todoRepository.getTodo()
        return todo
    }

    public async createTodo(req: Request, res: Response) {
        const todoRepository = new KnexTodoRepository()
        const formTodo: ITodoDto = {
            description: req.body.description,
            status: req.body.status,
            usersId: req.body.usersId
        }
        const createTodo = todoRepository.createTodo(formTodo)
        return res.status(201).json({
            status: 201,
            data: createTodo,
            message: "Successfully created todo"
        })
    }

    public async getTodoId(req: Request, res: Response) {
        const todoRepository = new KnexTodoRepository()
        const todoId = req.params.id
        const getTodoId = todoRepository.getTodoId(Number(todoId))
        return res.status(200).json({
            status: 200,
            data: getTodoId,
            message: "Successfully fetched todo"
        })
    }

    public async deleteTodoById(req: Request, res: Response) {
        const todoRepository = new KnexTodoRepository()
        const todoId = req.params.id
        const deleteTodo = todoRepository.deleteTodoById(Number(todoId))
        return res.status(200).json({
            status: 200,
            data: deleteTodo,
            message: "Successfully deleted todo"
        })
    }

}