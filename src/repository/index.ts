import { Db, MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw Error("No database URI configured for MongoDB");
}

if (!dbName) {
  throw Error("No database configured for MongoDB");
}

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function runWithDb(fn: (db: Db) => void) {
  let db;
  try {
    await client.connect();
    db = client.db(dbName);
    fn(db);
  } finally {
    await client.close();
  }
}

export async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db(dbName).command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
