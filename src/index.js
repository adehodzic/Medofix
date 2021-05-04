import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3330; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({});
});
//lista med
app.get('/artikl_med', (req, res) => {
    res.json({});
});
app.post('/artikl_med', (req, res) => {
    let doc = req.body

    storage.artikl_med.push(doc)
    res.json({ status: 'OK' });
});

//dodavanje meda
app.post('/artikl_med', (req, res) => {
    let doc = req.body

    storage.artikl_med.push(doc)
    res.json({ status: 'OK' });
});

//dohvat svih vrsta meda
app.get('/artikl_med', (req, res) => {
    res.json(storage.artikl_med);
});

//lista vrsta pcela
app.get('/pcelarstvo', (req, res) => {
    res.json(storage.pcelarstvo);
});
// dodavanje pcela
app.post('/pcelarstvo', (req, res) => {
    let doc = req.body

    storage.pcelarstvo.push(doc)
    res.json({ status: 'OK' });
});



//dohvaćanje samo prema nazivu
app.get('/proizvodi_meda/Propolis', (req, res) => {
    let proizvodi_med = req.params.naziv;
 
    res.json(storage.proizvodi_meda.filter((x) => x.naziv == "Propolis"))
});

//dohvaćanje samo odredene boje
app.get('/artikl_med/tamna', (req, res) => {
    let artikl_med = req.params.boja;
    res.json(storage.artikl_med.filter((x) => x.tipRezervacije == "tamna"));
});





app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));