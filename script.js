
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

let MoviePoster = React.createClass({
    render: function(){
        return React.createElement('img', {src: this.props.image.src});
    },
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
})

let MovieTitle = React.createClass({
    render: function(){
        return React.createElement('h2', {}, this.props.title);
    },

    propTypes:{
        title: React.PropTypes.string.isRequired,
    },
});

let MovieDescription = React.createClass({
    render: function(){
        return React.createElement('p', {style: {position:'absolute',display:'inline'}}, this.props.description);
    },

    propTypes:{
        description: React.PropTypes.string.isRequired,
    },
});

let Movie = React.createClass({
    render: function (){
        return React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title} ),
            React.createElement(MoviePoster, {image: {src: this.props.movie.poster}}),
            React.createElement(MovieDescription, {description: this.props.movie.desc}),
        );
    },

    propTypes: {
        movie: React.PropTypes.object.isRequired
    }
})

let MovieList = React.createClass({
    render: function(){
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Lista Filmów'),
            React.createElement('ul', {},
                this.props.movieList.map((m)=>{
                    return React.createElement(Movie, {movie:m, key: m.id})
                })
            )
        );
    },

    propTypes: {
        movieList: React.PropTypes.array.isRequired
    }
});


let element = React.createElement(MovieList, {movieList: movies});
ReactDOM.render(element, document.getElementById('app'));