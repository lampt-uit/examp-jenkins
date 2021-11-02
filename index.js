const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({ msg: 'A2Lam say hello to everyone!!!' });
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
