import Character from "../models/Character";

export const getSeriesWithCharacters = async () => {
    const series = [
        'Breaking Bad',
        'Game of Thrones',
        'Stranger Things'
    ];

    const seriesWithCharacters = await Character.find({ 
        mediaType: 'Serie',
        mediaTitle: { $in: series }
    });

    return series.map(seriesTitle => ({
        title: seriesTitle,
        characters: seriesWithCharacters.filter(char => char.mediaTitle === seriesTitle)
    }));
};