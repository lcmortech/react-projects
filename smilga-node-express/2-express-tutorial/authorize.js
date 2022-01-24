const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user === 'lauren') {
        req.user = {name: 'lauren', id:3}
        next()
    } else {
        res.status(401).send('unauthorized')
    }
    console.log('authorize')

}
//usually checked by matching jwt rather than req.user
module.exports = authorize