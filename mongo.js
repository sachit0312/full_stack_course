const mongoose = require('mongoose')

const url ='mongodb://full_stack:sachit0312@fullstack-shard-00-00.pea7i.mongodb.net:27017,fullstack-shard-00-01.pea7i.mongodb.net:27017,fullstack-shard-00-02.pea7i.mongodb.net:27017/note-app?ssl=true&replicaSet=atlas-14e81h-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('note', noteSchema)

const note = new Note({
  content: 'I am bored',
  date: new Date(),
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})