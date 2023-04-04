import fastify from "fastify";

const app = fastify();

app.get("/api/v1/ping", () => {
  console.log("CONUMED");
  return new Date();
});

app.post("/api/v1/ping", (request, reply) => {
  // console.log("CONUMED");
  console.log(request.body);
  return reply.status(200).send();
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => console.log("SERVER RUNNING"));
