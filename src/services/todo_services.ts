import knexCfg from "../database/knex";
import { ITodoDto } from "../dto/todo_dto";

export class KnexTodoRepository {
    public async getTodo() {
        return knexCfg('todo').select('*')
    }

    public async createTodo(dto: ITodoDto) {
        return knexCfg('todo').insert({
            description: dto.description,
            status: dto.status,
            users_id: Number(dto.usersId),
            created_at: new Date(),
        })
    }

    public async updateTodo(todoId: number, dto: ITodoDto) {
        return knexCfg('todo').where('todo_id', todoId).update({
            description: dto.description,
            status: dto.status,
            users_id: dto.usersId,
            updated_at: new Date(),
        })
    }

    public async deleteTodoById(todoId: number) {
        return knexCfg('todo').where('todo_id', todoId).del()
    }

    public async getTodoId(todoId: number) {
        return knexCfg('todo').where('todo_id', todoId).select('*')
    }
}