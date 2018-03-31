module.exports = (req, res, next) => {
  if(req.user.credits < 1){
    return res.status(401).send({ error: 'You Do Not Have Enough Credits' })
  } 
    next()
}