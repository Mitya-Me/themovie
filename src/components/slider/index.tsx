import { useState } from "react";
import styles from "./slider.module.scss";
import cn from "classnames";
import { ReactComponent as Arrow } from "../../assets/icons/slider/arrow.svg";
import { UIButton } from "../../ui/uiButton";
import { IMovies } from "../../interfaces/movie.interface";

export const Slider = ({ movies }: IMovies) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide((s) => s + move);
            setFadeState("fade-in");
        }, 300);

        clearTimeout(currentTimer);
        setFadeState("fade-out");
        setCurrentTimer(timer);
    };

    return (
        <div className={styles.slider}>
            <div className={cn(styles.slide, styles[fadeState])}>
                <div className={styles.slide__text}>
                    <div className={styles.slide__text_wrapper}>
                        <div className={styles.slide__text_title}>{movies[slide].title}</div>
                        <div className={styles.slide__text_genre}>{movies[slide].genre}</div>
                        <div className={styles.slide__text_description}>
                            {movies[slide].description}
                        </div>
                        <UIButton text='find out more'/>
                    </div>
                </div>
                <div
                    className={styles.slide__img}
                    style={{ backgroundImage: `url(${movies[slide].image})` }}
                />
            </div>

            {slide > 0 && (
                <button
                    onClick={() => handlerClick(-1)}
                    className={cn(styles.arrow, styles["arrow--left"])}
                >
                    <Arrow />
                </button>
            )}
            {slide < movies.length - 1 && (
                <button
                    onClick={() => handlerClick(1)}
                    className={cn(styles.arrow, styles["arrow--right"])}
                >
                    <Arrow />
                </button>
            )}
        </div>
    );
};
