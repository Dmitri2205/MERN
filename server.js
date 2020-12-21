const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const server = express()
const PORT = config.get('port') || 5001


server.use(express.json({extended:true}))
server.use('/api/auth', require('./routes/auth'))


async function start ()  {
	try{
		await mongoose.connect(config.get('mongoURI'),{
			useNewUrlParser:true,
			useUnifiedTopology:true,
			useCreateIndex:true
		})
		server.listen(PORT , () => console.log(`Server starts on port ${PORT}`))
	}catch(e){
		console.log('Error' + e.message)
		process.exit(1)
	}
}

start()
