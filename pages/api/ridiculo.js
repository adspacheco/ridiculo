import database from "core/database";

async function handler(request, response) {
  const result = await database.query(
    "SELECT 'RIDICULO' AS message, NOW() AS time"
  );
  response.status(200).json(result.rows[0]);
}

export default handler;
