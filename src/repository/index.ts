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
// export function UseMongo(
//     target: any,
//     key: string,
//     descriptor: PropertyDescriptor,
// ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = async function (...args: any[]) {
//         if (this?.constructor?.name == ProductRepository.name) {
//             try {
//                 originalMethod.apply(this, args);
//             } finally {
//             }
//         }
//     };
//     return descriptor;
// }

export function createClient() {
    return client.db(dbName);
}

export async function connect() {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!",
        );
    } catch (e) {
        await client.close();
    }
}
export async function disconnect() {
    console.log("You successfully disconnected to MongoDB");
    await client.close();
}
