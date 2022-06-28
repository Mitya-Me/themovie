export interface IMovie {
    id: number;
    title: string;
    description: string;
    genre: string;
    image: string;
}

export interface IMovies {
    movies: IMovie[];
}