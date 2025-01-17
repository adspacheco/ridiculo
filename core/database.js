import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}
export default {
  query: query,
};
