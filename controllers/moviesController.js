let db = require ('../database/models')
const fs = require('fs')

let numberFormat = n => n.toString().replace( /\B(?=(\d{3})+(?!\d))/g,
".");

let moviesController = {
    
    movies : (req, res, next) => {
        db.Peliculas.findAll()
        .then (peliculas => {
            res.render('movies', {peliculas : peliculas})
        })
      }
    ,
    detail: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then (pelicula => {
            res.render('detail', {pelicula : pelicula})
        })
    },

    recommended: (req, res) => res.render('recommended', { title: 'Recomendadas'}),

    new: (req, res, next) => {
        db.Peliculas.findAll(order ['release_date', 'DESC'], limit [5])
        .then (peliculas => {
            res.render('new', {peliculas : peliculas})
        })
      },
    search: (req, res) => res.render('recommended', { title: 'Recomendadas'}),

    add: (req,res) =>{
        res.render('create')
    },

    create: (req, res) => {
        db.Peliculas.create ({
            ...req.body
        })

        res.redirect('/movies');        
    },

    edit: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then((pelicula) => {
            res.render ('edit', {pelicula : pelicula})
        })
        
    },

    update : (req, res, next) => {
        db.Peliculas.update({
            ...req.body
        },{where: {id: req.params.id}});
        
        res.redirect('/movies');
    },

}

    

module.exports = moviesController;