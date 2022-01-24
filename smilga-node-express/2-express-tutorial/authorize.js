const authorize = (req, res, next)=>{
    console.log('authorize')
    next() //go to next middleware
}

module.exports = authorize