import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize-plugin";

class UserModel extends Model {
    user_id!: string;
    name!: string;
    email_address!: string;
    address!: string;
    phone_number!: number;
}

UserModel.init(
    {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false
    }
);

export default UserModel;