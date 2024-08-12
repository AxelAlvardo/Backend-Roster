import swaggerJSDoc from "swagger-jsdoc";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags : [
            {
                name: 'Movies',
                description: 'API operations related to movies'
            },
            {
                name: 'Series',
                description: 'API operations related to series'
            },
            {
                name: 'Books',
                description: 'API operations related to books'
            },
            {
                name: 'Characters',
                description: 'API operations related to all characters'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript Movie Roster [Prueba Tecnica]',
            version: '1.0.0',
            description: 'API Docs for Movie Roster'
        }
    },
    apis: [
        './src/routes/MoviesRouter.ts',
        './src/routes/SeriesRoutes.ts',
        './src/routes/BooksRoute.ts',
        './src/routes/CharacterRoute.ts',
    ]
} 

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec;