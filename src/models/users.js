const dbPool = require("../config/database");

const getDataUser = () => {
 const sqlQuery = 'select name, address, phone, email from student';

  return dbPool.execute(sqlQuery);
};


const createUser = (data) => {
    const sqlQuery = `INSERT INTO student (name,email,address) VALUES  (
        '${data.name}','${data.email}', '${data.address}'
    )`;

     return dbPool.execute(sqlQuery);
   };


   const updateUser = (data,idUser) => {
    console.log(idUser);
    const sqlQuery = `UPDATE student 
                      SET 
                        name =  '${data.name}',
                        email = '${data.email}', 
                        address= '${data.address}' 
                      WHERE id = ${idUser}
                      `;

     return dbPool.execute(sqlQuery);
   };

   const deleteUser = (idUser) => {
    console.log(idUser);
    const sqlQuery = `DELETE FROM student 
                      WHERE 
                         id = ${idUser}
                      `;

     return dbPool.execute(sqlQuery);
   };
   
   
   
module.exports = {getDataUser,createUser,updateUser,deleteUser};
