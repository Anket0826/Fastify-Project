import { FastifyInstance } from "fastify"
import * as UserController from '../controllers/user-contoller'

export default async function userRoute(fastify: FastifyInstance){
  fastify.post('/', UserController.createUsers);
  fastify.get('/getByAll', UserController.getAllUsers);
  fastify.get('/getByUserId/:user_id', UserController.getByUserId);
  fastify.put('/update/:user_id', UserController.updateUser);
  fastify.delete('/delete/:user_id', UserController.deleteUser)
}
