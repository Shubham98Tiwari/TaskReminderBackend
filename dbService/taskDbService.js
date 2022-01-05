const taskModel = require('./../models/taskModel')
class taskDbService {
    async createEntry (payload) {
        return new Promise((resolve, reject) => {
            let tasks = new taskModel(payload);
            tasks.save()
                .then(res => {
                    console.log("res ", res)
                    resolve({msg: res._id});
                })
                .catch(err => {
                    console.log(err)
                    resolve({"error":err});
                })
        })
    }
    async findTaskByIdObj (IdObj) {
        return new Promise((resolve, reject) => {
            IdObj["date"] = { $gt: new Date() };
            console.log(IdObj)

            taskModel.find(IdObj)
                .then(res => {
                    res.sort((a, b) => a.date - b.date);
                    console.log("res ", res)
                    resolve({msg: res});
                })
                .catch(err => {
                    console.log(err)
                    resolve({"error":err});
                })
        })
    }
    async deleteByIdObj (IdObj) {
        console.log("IdObj", IdObj)
        return new Promise((resolve, reject) => {
            taskModel.deleteOne(IdObj)
                .then(res => {
                    console.log("res ", res)
                    resolve({msg: res});
                })
                .catch(err => {
                    console.log(err)
                    resolve({"error":err});
                })
        })
    }
}

module.exports = new taskDbService ();