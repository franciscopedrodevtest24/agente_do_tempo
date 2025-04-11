import { Memory } from "@mastra/memory";

const host = "bhvnocolm3.o4dm06sz26.tsdb.cloud.timescale.com";
const port = 32539;
const user = "tsdbadmin";
const database = "tsdb";
const password = "r1ml7pd8fr1wiwa8";
// postgresql://franciscojoaopedro:devtest@localhost:5432/kibera_02
/// postgres://tsdbadmin:r1ml7pd8fr1wiwa8@bhvnocolm3.o4dm06sz26.tsdb.cloud.timescale.com:32539/tsdb?sslmode=require
export const configDb={
    host,
    port,
    user,
    database,
    password
}
export const connectionString = `postgres://tsdbadmin@bhvnocolm3.o4dm06sz26.tsdb.cloud.timescale.com:32539/tsdb?sslmode=require`;
// const memory = new Memory({
//     storage: new UpstashStore({
//       url: process.env.UPSTASH_REDIS_REST_URL,
//       token: process.env.UPSTASH_REDIS_REST_TOKEN,
//     }),
//     vector: new UpstashVector({
//       url: process.env.UPSTASH_REDIS_REST_URL,
//       token: process.env.UPSTASH_REDIS_REST_TOKEN,
//     }),
//     options: {
//       lastMessages: 10,
//       semanticRecall: {
//         topK: 3,
//         messageRange: 2,
//       },
//     },
//   });