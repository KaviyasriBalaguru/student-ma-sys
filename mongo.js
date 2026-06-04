// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const Student = mongoose.model('Student', studentSchema);

// app.use(express.json());

// app.post('/students', async (req, res) => {

//   const newStudent = new Student(req.body);

//   await newStudent.save();

//   res.send(newStudent);

// });

// app.get('/students', async (req, res) => {

//   const students = await Student.find();

//   res.send(students);

// });

// app.put('/students/:id', async (req, res) => {

//   const id = req.params.id;

//   const updated = await Student.findByIdAndUpdate(
//     id,
//     req.body,
//     { new: true }
//   );

//   res.send(updated);

// });

// app.patch('/students/:id', async (req, res) => {
//   const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(updated);
// });

// app.delete('/students/:id', async (req, res) => {

//   await Student.findByIdAndDelete(req.params.id);

//   res.send("Deleted");

// });

// app.listen(3000);


const express = require('express');
const mongoose = require('mongoose'); 

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Student = mongoose.model('Student', studentSchema);

app.post('/submit', async (req, res) => {

  const newStudent = new Student(req.body);

  await newStudent.save();

  res.send("Data Stored Successfully");

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});