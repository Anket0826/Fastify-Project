import { FastifyReply, FastifyRequest } from "fastify";
import { CandidateInterface } from "../interfaces/candidate-interface";
import * as CandidateService from '../services/candidate-service'

export async function createCandidate(request: FastifyRequest, reply: FastifyReply) {
    const candidate = request.body as CandidateInterface;
    try {
        const createNew = await CandidateService.createCandidate(candidate)

        if (createNew && createNew.cand_id) {
            reply.status(201).send({
                message: "Candidate Created Successfully",
                candidate_id: createNew.cand_id,
            })
        } else {
            return reply.status(404).send({
                message: "Failed to Create Candidate",
                candidate: [],
            })
        }

    } catch (err) {
        reply.status(500).send({
            message: "Internal Server Error",
            error: err,
        })
    }
}
export async function getAllCandidate(request: FastifyRequest, reply: FastifyReply) {
    const getCandidate = request.params as CandidateInterface;
    try {
        const candidates = await CandidateService.getAllCandidate(getCandidate)

        if (candidates) {
            reply.status(200).send({
                message: "Candidates Fetched Successfully",
                candidates: candidates,
            })
        } else {
            reply.status(404).send({
                message: "Failed to Fetch Candidates",
                candidates: [],
            })
        }
    } catch (err) {
        reply.status(500).send({
            message: "Internal Server Error",
        })
    }
}
export async function getCandidateById(request: FastifyRequest<{ Params: { cand_id: string } }>, reply: FastifyReply) {
    const { cand_id } = request.params;
    try {
        const candidate = await CandidateService.getCandidateById(cand_id)
        if (candidate) {
            reply.status(200).send({
                message: "Candidate Fetched Successfully",
                candidate: candidate,
            })
        } else {
            reply.status(404).send({
                message: "Failed to Fetch Candidate",
                candidate: [],
            })
        }
    } catch (err) {
        reply.status(500).send({
            message: "Internal Server Error",
        })
    }
}
export async function updateCandidateById(request: FastifyRequest<{ Params: { cand_id: string } }>, reply: FastifyReply) {
    const { cand_id } = request.params;
    const data = request.body as CandidateInterface;
    try {
        const candidateUpdate = await CandidateService.updateCandidateById(cand_id, data)
        if (!candidateUpdate) {
            return reply.status(404).send({
                message: "Candidate not found",
                candidate: [],
            })
        } else {
            reply.status(200).send({
                message: "Candidate updated successfully",
                candidate: candidateUpdate,
            })
        }
    } catch (error) {
        reply.status(500).send({
            message: "Internal Server Error",
            error: error,
        })
    }
}
export async function deleteCandidateById(request: FastifyRequest<{ Params: { cand_id: string } }>, reply: FastifyReply) {
    const { cand_id } = request.params;
    try {
        const candidateDelete = await CandidateService.deleteCandidateById(cand_id)
        if (!candidateDelete) {
            return reply.status(404).send({
                message: "Candidate not found",
                candidate: [],
            })
        } else {
            reply.status(200).send({
                message: "Candidate deleted successfully",
                candidate: candidateDelete,
            })
        }
    } catch (error) {
        reply.status(500).send({
            message: "Internal Server Error",
            error: error,
        })
    }
}