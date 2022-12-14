import express from 'express';
import { Application } from './application/initApp';
import { MongoRepo } from './infrastructure/database/mongo/initMongo';
import { Handler } from './infrastructure/rest/handlers/initHandler';
import { Routes } from './infrastructure/rest/routes';
var cors = require('cors')

const app = express()
const port = 3005
app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
  origin: '*'
}))

let dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust", "users")
let application = new Application(dbrepo)
let hander = new Handler(application)
Routes(app, hander)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// openapi: 3.0.3
// info:
// title: Swagger Petstore - OpenAPI 3.0
// description: | -
//   This is the sagger for magictrust
//   version: 1.0.11

// servers:
// - url: http://localhost:8000/api
// tags:

// - name: Auth
// description: Autentication

//   - name: Catcher
// description: Create new document


// paths:
// /super-bouncer/login:
// post:
// tags:
// - Auth
// summary: login user
// description: login user
// requestBody:
// description: login user
// content:
// application / json:
// schema:
// $ref: '#/components/schemas/Login'
// required: true
// responses:
// '200':
// description: Successful operation

//   / super- bouncer / login2fa:
// post:
// security:
// - bearerAuth: []
// tags:
// - Auth
// summary: two factor auth
// requestBody:
// description: login user
// content:
// application / json:
// schema:
// $ref: '#/components/schemas/Login2f'
// required: true
// description: two factor auth

// responses:
// '200':
// description: successful operation

//   / catcher / create:
// post:
// security:
// - bearerAuth: []
// tags:
// - Creator
// summary: create new text
// requestBody:
// description: new text
// content:
// application / json:
// schema:
// type: object
// properties:
// data:
// type: string
// example: new data
// required: true
// description: two factor auth

// responses:
// '200':
// description: successful operation

//   / catcher / create - batch:
// post:
// security:
// - bearerAuth: []
// tags:
// - Creator
// summary: create batch new text
// requestBody:
// description: new text batch
// content:
// application / json:
// schema:
// type: array
// items:
// type: object
// properties:
// data:
// type: string
// example: new data
// required: true
// description: two factor auth

// responses:
// '200':
// description: successful operation



// components:
// schemas:
// Login2f:
// type: object
// properties:
// auth_number:
// type: string
// example: 1234
// xml:
// name: login2f
// Login:
// type: object
// properties:
// email:
// type: string
// example: abraxas @gmail.com
// password:
// type: string
// example: tes
// xml:
// name: login


// securitySchemes:
// bearerAuth:            # arbitrary name for the security scheme
//       type: http
// scheme: bearer
// bearerFormat: JWT    # optional, arbitrary value for documentation purposes
