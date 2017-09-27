const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const products_controller = require('./products_controller')

const connection_string = 'postgres://postgres:devmountain@localhost/0927project'

const app = express()
app.use(bodyParser.json())
app.use(cors())


const massiveconnection = massive(connection_string)
.then(dbInstance=>{
	app.set('db',dbInstance)
})


app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );






const port = 3000;
app.listen(port, ()=>{console.log(`listening on port: ${port}`)})