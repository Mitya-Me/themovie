export interface IMovieSlide {
    id: number;
    title: string;
    description: string;
    genre: string;
    image: string;
}

export interface ISliderProps {
    movies: IMovieSlide[]
}


