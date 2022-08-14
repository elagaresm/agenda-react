const express = require('express')
const app = express()
const port = 5000;
const axios = require('axios')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api', async (req, res) => {
    axios.get('http://www.raydelto.org/agenda.php')
        .then((data) => res.json(data.data))
})

app.post('/api', (req, res) => {
    let contacto = req.body
    axios.post('http://www.raydelto.org/agenda.php', {
        nombre: contacto.nombre,
        apellido: contacto.apellido,
        telefono: contacto.telefono,
    })
        .then(function (response) {
            console.log("Submitted successfully")
        })
})


app.listen(port, () => { console.log(`Server started on port ${port}`) })