import * as SQLite from 'expo-sqlite';

const tableName = 'tokens';
const db = SQLite.openDatabase('db.test');

export const createTable = async () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, token TEXT)',
      [],
      (txObj, resultSet) => {
        // Success callback
        console.log('Table created successfully.');
      },
      (txObj, error) => {
        // Error callback
        console.log('Error', error);
        return false; // Return a boolean value indicating the error state
      }
    );
  });
};

export const saveTokenItems = async (email, password, token) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tokens (email, password, token) VALUES (?, ?, ?)',
      [email, password, token],
      (txObj, resultSet) => {
        // Success callback
        console.log('Data inserted successfully.');
      },
      (txObj, error) => {
        // Error callback
        console.log('Error', error);
        return false; // Return a boolean value indicating the error state
      }
    );
  });
};

export const checkBearerToken = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT token FROM tokens ORDER BY id DESC LIMIT 1`,
        [],
        (txObj, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0).token);
          } else {
            resolve(null);
          }
        },
        (txObj, error) => {
          console.log('Error', error);
          return false; // Return a boolean value indicating the error state
        }
      );
    });
  });
};
