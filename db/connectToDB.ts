// import "dotenv/config"
import { PrismaClient } from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const client = new PrismaClient({
    adapter: new PrismaPg({connectionString: process.env.DATABASE_URL})
})

export{
    client
}