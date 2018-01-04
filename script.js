
let movies = [
    {
        id: 1,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        desc: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 2,
        title: 'The Lion King',
        desc: 'Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
];

let moviesElements = movies.map((movie) => {
    //czy style w react powinny byÄ‡ tworzone klasycznie przy pomocy osobnego pliku css?
    //jeĹ›li tak, to kiedy warto lub zalecane jest uzycie inline style tak jak w przypadku paragrafu z linii 29
    return React.createElement('li', {key:movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {src: movie.poster}),
        React.createElement('p', {style: {position:'absolute',display:'inline'}}, movie.desc),
    );
});

let element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista FilmĂłw'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));