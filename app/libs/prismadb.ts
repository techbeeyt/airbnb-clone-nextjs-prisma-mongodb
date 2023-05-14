import { PrismaClient } from '@prisma/client';


// We creating a prisma client and storing it into a global variable
// Hence, we dont get multiple client instance while hot reloading the development mode
// This is called as best practice for using prisma with next js

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client; // This global variable is not effective by hot reload

export default client;