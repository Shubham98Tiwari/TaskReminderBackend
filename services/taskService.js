const taskDbService = require("./../dbService/taskDbService")
class taskService {
    async createEntry (payload) {
        try{
            await taskDbService.createEntry (payload)
            return {'msg': "done"};
        }
        catch (error) {
            return {'error': error}
        }
    }
    async findTaskByIdObj  (IdObj) {
        try{
            let tasks = await taskDbService.findTaskByIdObj (IdObj)
            return tasks;
        }
        catch (error) {
            return {'error': error}
        }
    }
    async deleteByIdObj  (IdObj) {
        try{
            let result = await taskDbService.deleteByIdObj (IdObj)
            return result;
        }
        catch (error) {
            return {'error': error}
        }
    }
}
module.exports = new taskService