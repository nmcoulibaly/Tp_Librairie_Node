const express = require('express');
const cors = require('cors');
const livres = require('./livres.json')
const app = express();
const port = 3000;

// Middleware
app.use(cors());

// Route pour afficher tous les livres
app.get('/livres', (res, req) => {
    res.status(200).json(livres);
}
);

// Route pour afficher un livre par rapport à son id
app.get('/livres/:id', (res, req) => {
    const id = parseInt(req.params.id);
    const leLivre = livres.find(livres => livres.id === id);
    res.status(200).json(leLivre);
});

// Route pour afficher un livre par rapport à son nom
app.get('/livres/:titre', (res, req) => {
    const titre = parseInt(req.params.titre);
    const nomLivre = livres.find(livres => livres.titre === titre);
    res.status(200).json(nomLivre);
});

// Route pour ajouter un nouveau livre 
app.post('/livres', (res, req) => {
    livres.push(req.body)
    res.status(200).json(livres);
});
// Route pour modifier un livre par rapport à son id
app.put('/livres/:id', (res, req) => {
    const id = parseInt(req.params.id);
    let leLivre = livres.find(livres => livres.id === id);
    leLivre.titre = req.body.titre,
        leLivre.auteur = req.body.auteur,
        leLivre.prix = req.body.prix,
        leLivre.description = req.body.description
    res.status(200).json(leLivre);

});
// Route pour supprimer un livre par rapport à son id
app.delete('/livres/:id', (res, req) => {
    const id = parseInt(req.params.id);
    let leLivre = livres.find(livres => livres.id === id);
    livres.splice(livres.indexOf(leLivre), 1)
    res.status(200).json(livres);
});
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});