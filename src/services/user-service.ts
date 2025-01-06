
import { UserInterface } from "../interfaces/users-interface";
import UserModel from "../models/users-model";

export async function createUsers(users: UserInterface) {
    return await UserModel.create({ ...users });
}

export async function getAllUsers(filters: UserInterface) {
    return await UserModel.findAll({
        where: { ...filters }
    });
}

export async function getByUserId(user_id: string) {
    return await UserModel.findOne({ where: { user_id } })
}

export async function updateUserById(user_id: string, data: UserInterface) {
    const update = await UserModel.findOne({ where: { user_id } });
    if (!update) return null
    await update.update(data)
    return update
}

export async function deleteUser(user_id: string) {
    return await UserModel.destroy(
        { where: { user_id } }
    )
}