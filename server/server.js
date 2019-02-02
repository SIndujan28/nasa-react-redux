import path from 'path'
import devBundle from './devBundle.js'
import express from 'express'
const CURRENT_WORKING_DIR=process.cwd()
const app=express()
import template from './../template'
let port=process.env.PORT||'3000'
devBundle.compile(app)
app.use('/dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')))
app.get('/',(req,res)=>
{
    res.status(200).send(template())
})
app.listen(port,(err) =>
{
 if(err)
 {
     console.log(err)
 }
 console.info('server started on port %s',port)
})