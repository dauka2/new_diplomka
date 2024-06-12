const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const coursesFilePath = path.join(__dirname, 'data', 'courses.json');

// Endpoint для получения курсов
app.get('/api/courses', (req, res) => {
  fs.readFile(coursesFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading courses file');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Endpoint для добавления курса
app.post('/api/courses', (req, res) => {
  const newCourse = req.body;
  fs.readFile(coursesFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading courses file');
    } else {
      const courses = JSON.parse(data);
      newCourse.id = courses.length + 1;
      courses.push(newCourse);
      fs.writeFile(coursesFilePath, JSON.stringify(courses, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error writing to courses file');
        } else {
          res.status(201).send(newCourse);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
