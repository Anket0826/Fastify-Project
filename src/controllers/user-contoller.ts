import { FastifyReply, FastifyRequest } from "fastify";
import { UserInterface } from "../interfaces/users-interface";
import * as UserService from '../services/user-service'


export async function createUsers(request: FastifyRequest, reply: FastifyReply) {
    const user = request.body as UserInterface;

    const createNew = await UserService.createUsers(user)
    return reply.status(201).send({
        message: 'User created successfully',
        user_id: createNew.user_id,
    })
}

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await request.params as UserInterface;
    const data = await UserService.getAllUsers(users)
    if (!data) {
        return reply.status(404).send({
            message: 'No Users Found',
            users: [],
        })
    }
    return reply.status(200).send({
        message: 'Users fetched successfully',
        users: data,
    })
}

export async function getByUserId(request: FastifyRequest<{ Params: { user_id: string } }>, reply: FastifyReply) {
    const { user_id } = request.params;
    const user = await UserService.getByUserId(user_id)

    if (!user) {
        return reply.status(404).send({
            message: 'User not found',
            user: {},
        })
    }
    return reply.status(200).send({
        message: 'User fetched successfully',
        user,
    })
}

export async function updateUser(request: FastifyRequest<{ Params: { user_id: string } }>, reply: FastifyReply) {
    const { user_id } = request.params;
    const data = request.body as UserInterface;
    const userUpdate = await UserService.updateUserById(user_id, data)
    if (!userUpdate) {
        return reply.status(404).send({
            message: 'User not found',
            user: [],
        })
    }
    return reply.status(200).send({
        message: 'User updated successfully',
        user: userUpdate,
    })
}

export async function deleteUser(
    request: FastifyRequest<{ Params: { user_id: string } }>,
    reply: FastifyReply
) {
    const { user_id } = request.params;
    const deleteData = await UserService.deleteUser(user_id);
    if (!deleteData) {
        return reply.status(404).send({
            message: "Candidate data not found or already deleted.",
            user: [],
        })
    }
    return reply.status(200).send({
        message: 'User deleted successfully',
        user: deleteData,
    })
}