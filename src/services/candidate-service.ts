import { CandidateInterface } from "../interfaces/candidate-interface";
import CandidateModel from "../models/candidate-model"

export async function createCandidate(candidate: CandidateInterface) {
    return await CandidateModel.create({
        ...candidate
    })
}
export async function getAllCandidate(candidate: CandidateInterface) {
    return await CandidateModel.findAll({ where: { ...candidate } })
}
export async function getCandidateById(cand_id: string) {
    return await CandidateModel.findOne({ where: { cand_id } })
}
export async function updateCandidateById(cand_id: string, data: CandidateInterface) {
    const updateCandidate = await CandidateModel.findOne({ where: { cand_id } })
    if (!updateCandidate) return null
    await updateCandidate.update(data)
    return updateCandidate
}
export async function deleteCandidateById(cand_id: string){
    return await CandidateModel.destroy({ where: { cand_id } })
}