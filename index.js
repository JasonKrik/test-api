// index.js - Corrected for Render.com deployment
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// IMPORTANT: Use PORT environment variable or default to 8080 for Render
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Required for Render

// Run the server!
try {
  await fastify.listen({ port: PORT, host: HOST })
  console.log(`🚀 Server listening on ${HOST}:${PORT}`)
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
