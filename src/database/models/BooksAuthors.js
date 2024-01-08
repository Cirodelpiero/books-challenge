// Modelo BooksAuthors
module.exports = (sequelize, dataTypes) => {
    let alias = 'BooksAuthors';
    let cols = {
        BookId: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        AuthorId: {
            type: dataTypes.INTEGER,
            primaryKey: true
        }
        // Puedes agregar otras columnas si es necesario
    };
    let config = {
        tableName: 'BooksAuthors',
        timestamps: false
    };

    const BooksAuthors = sequelize.define(alias, cols, config);

    return BooksAuthors;
};
