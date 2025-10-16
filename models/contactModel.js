const pool = require('../database/');

exports.saveMessage = async (name, email, message) => {
  const sql = `
    INSERT INTO messages (name, email, message)
    VALUES ($1, $2, $3)
  `;
  return pool.query(sql, [name, email, message]);
};

exports.getMessages = async () => {
  const sql = `SELECT * FROM messages ORDER BY created_at DESC`;
  return pool.query(sql);
};
