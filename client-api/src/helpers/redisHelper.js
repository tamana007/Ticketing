// redisHelper.js

const jwt = require("jsonwebtoken");

// In-memory storage
const jwtStorage = {};

const setJWT = async (key, value) => {
  return new Promise((resolve, reject) => {
    // Use process.env.JWT_ACCESS_SECRET here for verification
    jwt.verify(value, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error:', err);
        reject(err);
      } else {
        jwtStorage[key] = value;
        resolve(value);
      }
    });
  });
};

const getJWT = async (key) => {
  return new Promise((resolve, reject) => {
    const value = jwtStorage[key];
    if (value) {
      // Token found, verify and return
      jwt.verify(value, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) {
          console.error('JWT Verification Error:', err);
          reject(err);
        } else {
          resolve(value);
        }
      });
    } else {
      // Token not found
      resolve(null);
    }
  });
};

module.exports = {
  setJWT: setJWT,
  getJWT: getJWT,
};





// import { createClient } from 'redis';
// // const { createClient } = require('redis');


// const client = await createClient()
//   .on('error', err => console.log('Redis Client Error', err))
//   .connect();

// await client.set('key', 'value');
// const value = await client.get('key');
// await client.disconnect();


// // import { createClient } from 'redis';
// const redis=require('redis');
// // const client = redis.createClient();



// const client = await createClient()
//   .on('error', err => console.log('Redis Client Error', err))
//   .connect();

// await client.set('key', 'value');
// const value = await client.get('key');





// // const redis = require('redis');
// // const client = redis.createClient();
// // // await client.connect();
// // client.on('error', (err) => {
// //   console.log('Redis Client Error', err);
// // });






// const setJWT = async (key, value) => {
//   return new Promise((resolve, reject) => {
//     client.set(key, value, (err, reply) => {
//       if (err) {
//         console.error('Redis Set Error:', err);
//         reject(err);
//       } else {
//         resolve(reply);
//       }
//     });
//   });
// };

// const getJWT = async (key) => {
//   return new Promise((resolve, reject) => {
//     client.get(key, (err, reply) => {
//       if (err) {
//         console.error('Redis Get Error:', err);
//         reject(err);
//       } else {
//         resolve(reply);
//       }
//     });
//   });
// };


// // const setJWT = async (key, value) => {
// //   return new Promise((resolve, reject) => {
// //     client.set(key, value, (err, reply) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(reply);
// //       }
// //     });
// //   });
// // };

// // const getJWT = async (key) => {
// //   return new Promise((resolve, reject) => {
// //     client.get(key, (err, reply) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(reply);
// //       }
// //     });
// //   });
// // };

module.exports = {
  setJWT,
  getJWT,
};
