const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rootroot',
//     database: 'websiteDB'
// })

server.use(helmet())
server.use(cors())
server.use('/', router)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))



server.listen(PORT, ()=> console.log(`Port ${PORT} is connected and working...`))

// server.get('/api/website', (req, res)=> (
//     connection.query (
//         'SELECT * FROM website;',
//         (error, rows)=> {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         })
// ))

// server.get('/api/homepage', (req, res) => {
//     connection.query(
//         'SELECT * FROM homepage', (error, rows)=> {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         })
// })

// server.get('/api/fouder', (req, res) => {
//     connection.query(
//         'SELECT * FROM fouder', (error, rows)=> {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// server.get('/api/owner', (req, res) => {
//     connection.query(
//         'SELECT * FROM owner', (error, rows)=> {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// server.get('/api/website/:id', (req, res) => {
//     const id = req.params.id
//     connection.query(
//         `SELECT * FROM website WHERE website_id = ${id}`,
//         (error, rows) => {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// server.get('/api/homepage/:id', (req, res) => {
//     const id = req.params.id
//     connection.query(
//         `SELECT * FROM homepage WHERE homepage_id = ${id}`,
//         (error, rows) => {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// server.get('/api/founder/:id', (req, res) => {
//     const id = req.params.id
//     connection.query(
//         `SELECT * FROM founder WHERE founder_id = ${id}`,
//         (error, rows) => {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// server.get('/api/owner/:id', (req, res) => {
//     const id = req.params.id
//     connection.query(
//         `SELECT * FROM owner WHERE owner_id = ${id}`,
//         (error, rows) => {
//             if(!error) {
//                 if(rows.length === 1) {
//                     res.json(...rows)
//                 } else {
//                     res.json(rows)
//                 }
//             } else {
//                 console.log('Error', error)
//             }
//         }
//     )
// })

// connection.connect (error => {
//     !error ? console.log('Database is working and connected') : console.log('ERROR', error)
// })