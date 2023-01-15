let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  bodyParser = require('body-parser'),
  createError = require('http-errors');

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Database connected succesfully');
    },
    (error) => {
      console.log('Cannot connect to database ' + error);
    }
  );

const studentAPI = require('./routes/student.route');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use('/api', studentAPI);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Server running on port http://localhost:' + PORT);
});

// 404 handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
