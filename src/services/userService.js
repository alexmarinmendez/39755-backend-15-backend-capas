import User from '../models/userModel.js'
import Repository from './Repository.js'

export default class UserService extends Repository {
    constructor(dao) {
        super(dao, User.model)
    }
}