exports.errorHandler = (err, req, res, next)=>{
    if(err.status){
        return res.status(err.status).send(err.message)
    }
    res.status(500).send('Server side Error')
}


exports.notFoundHandler= (req, res, next)=>{
    const error = new Error('404 not Found');
    error.status = 404;

    next(error)
}