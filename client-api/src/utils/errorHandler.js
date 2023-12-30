// const handleError=(error,res)=>{
//   console.log('err',error);
//   res.status(error.status || 500)
//   res.json({message:error.message,})
// }
// module.exports=handleError;



// // Error Handling Middleware
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({ message: error.message });
// });
// errorHandler.js
//::::::::::::::::::::::::::::::::::::::::::::
// const errorHandler = (app) => {
//   app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({ message: error.message });
//   });
// };

// module.exports = errorHandler;




// errorHandler.js
const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
};

module.exports = errorHandler;