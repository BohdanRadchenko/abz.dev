const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);

const start = async () => {
  try {
	app.listen(PORT, () => {
	  console.log("Server started on port " + PORT);
	});
  } catch (e) {
	console.log("Server Error", e.message);
	process.exit(1);
  }
};

start();
