import Character from "../models/Character";

export const getBooksWithCharacters = async () => {
    const books = [
        'Moby Dick',
        'Harry Potter',
        'Juego de Tronos'
    ];

    const booksWithCharacters = await Character.find({ 
        mediaType: 'Libro',
        mediaTitle: { $in: books }
    });

    return books.map(bookTitle => ({
        title: bookTitle,
        characters: booksWithCharacters.filter(char => char.mediaTitle === bookTitle)
    }));
};