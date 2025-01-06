import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize-plugin";

class CandidateModel extends Model {
    cand_id!: string;
    cand_FullName!: string;
    cand_email!: string;
    cand_address!: string;
    cand_phoneNumber!: number;
    cand_experience!: number;
}

CandidateModel.init(
    {
        cand_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        cand_FullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cand_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        cand_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cand_phoneNumber: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        cand_experience: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'candidates',
        timestamps: false,
    }
)
export default CandidateModel;