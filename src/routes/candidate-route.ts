import { FastifyInstance } from "fastify";
import { createCandidate, deleteCandidateById, getAllCandidate, getCandidateById, updateCandidateById } from "../controllers/candidate-controller";

export default async function candidateRoute(fastify: FastifyInstance) {
    fastify.post('/', createCandidate);
    fastify.get('/allCandidates', getAllCandidate);
    fastify.get('/:cand_id', getCandidateById);
    fastify.put('/update/:cand_id', updateCandidateById)
    fastify.delete('/delete/:cand_id', deleteCandidateById)
}