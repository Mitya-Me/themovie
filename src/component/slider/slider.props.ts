export interface IMovieSlide {
    id: number; 
    title: string; // name
    description: string; // text
    genre: string; // job position
    image: string;
}

export interface ISliderProps {
    movies: IMovieSlide[]
}

