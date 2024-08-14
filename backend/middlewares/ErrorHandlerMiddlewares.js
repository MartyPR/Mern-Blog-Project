const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

const NotFound= (req,res,next)=>{
  // res.status(404).json({message:'Route not found on our server'})
  next();
}

module.exports = {errorHandler,NotFound};
