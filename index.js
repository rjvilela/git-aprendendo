const express = require('express');

const app = spress()

app.get('/test', (req, res) =>{
return res.json({hello: 'world'})
});

app.listen(3333);