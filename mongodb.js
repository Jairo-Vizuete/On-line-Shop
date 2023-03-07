import { MongoClient } from 'mongodb'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let cachedClient = null

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  const client = await MongoClient.connect(MONGODB_URI)

  cachedClient = client
  return client
}
