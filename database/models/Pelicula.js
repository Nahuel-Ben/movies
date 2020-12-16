module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas";
    
    const Pelicula = sequelize.define(alias, {
        id: {
            auntoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            allownull: false,
            type: dataTypes.STRING
        },
        rating: {
            allownull: false,
            type: dataTypes.DECIMAL
        },
        awards: {
            allownull: false,
            type: dataTypes.INTEGER
        },
        release_date: {
            allownull: false,
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName : "movies",
        timestamps: false
    });

    return Pelicula;
}