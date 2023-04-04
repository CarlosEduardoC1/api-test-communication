import fastify from "fastify";

const app = fastify();

app.get("/api/v1/ping", () => {
  console.log("CONUMED");
  return new Date();
});

app
  .listen({ 
    host:"0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3000 })
  .then(() => console.log("SERVER RUNNING"));
