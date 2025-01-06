import { FastifyInstance } from "fastify";
import userRoute from "./users-route";
import candidateRoute from "./candidate-route";

const basePrefix = '/api/v1';

export default async function (app: FastifyInstance) {
    app.register(userRoute, { prefix: `${basePrefix}/users` });
    app.register(candidateRoute, {prefix: `${basePrefix}/candidate`})
}