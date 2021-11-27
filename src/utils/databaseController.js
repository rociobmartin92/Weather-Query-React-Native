import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.yourcitydata');

/// INIT
export const initTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS cities (key INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT)', null,
      () => console.log('Table Created'),
      (_, error) => console.log('Error ', error)
    )
  })
}

/// CREATE
export const add = (city) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO cities (city) values (?)', [city],
      null,
      (_, error) => console.log('Error', error))
  })
}

/// READ
export const read = (setArr) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM cities', null,
      (_, { rows: { _array } }) => {
        let arr = [];
        _array.map((obj) => {
          let parseObj = JSON.parse(obj.city);
          parseObj.key = obj.key;
          arr.push(parseObj);
        })
        setArr(arr);
      },
      (_, error) => console.log('Error ', error)
    )
  })
}

/// DELETE
export const del = (id) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM cities WHERE key = ? ', [id],
      null,
      (_, error) => console.log('Error ', error)
    )
  })
}
