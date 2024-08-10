import Character from "../models/Character";

export const getMoviesWithCharacters = async () => {
    const movies = [
        'El Señor de los Anillos',
        'Star Wars',
        'Spider-Man'
    ];

    const moviesWithCharacters = await Character.find({ 
        mediaType: 'Película',
        mediaTitle: { $in: movies }
    });

    return movies.map(movieTitle => ({
        title: movieTitle,
        characters: moviesWithCharacters.filter(char => char.mediaTitle === movieTitle)
    }));
};