const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect database
mongoose.connect('mongodb+srv://psychcomp:IZ8j8gGPh9OjG4DW@psychxcomp.eowi7.mongodb.net/db', {
  useNewUrlParser: true
})

app.use(express.json())

// สร้าง database schema
const Cat = mongoose.model('Cat', { name: String })

// สร้าง instance จาก model
const kitty = new Cat({ name: 'JavaScript' })

// save ลง database (return เป็น Promise)
kitty.save().then(() => console.log('meow'))


app.get('/', (req, res) => {
  res.json({ message: 'Ahoy!' })
})
app.listen(9000, () => {
  console.log('Application is running on port 9000')
})