const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query", "warn", "info", "error"],
  errorFormat: "pretty",
});

module.exports = prisma;
