import styles from "./cinemaHall.module.scss";
import cn from "classnames";
import { seats } from "../../mockData/cinemaHallSeats";
import { UIButton } from "../../ui/uiButton";

export const CinemaHall = () => {
    return (
        <div className={styles.cinemaHall}>
            <div className={styles.cinemaHall__seatTags}>
                <ul className={styles.cinemaHall__seatTags_list}>
                    <li className={cn(styles.cinemaHall__seatTags_item,styles.cinemaHall__seatTags_itemYouSeat )}>you seat</li>
                    <li className={cn(styles.cinemaHall__seatTags_item,styles.cinemaHall__seatTags_itemAvailable )}>available</li>
                    <li className={cn(styles.cinemaHall__seatTags_item,styles.cinemaHall__seatTags_itemSold )}>sold</li>
                    <li className={cn(styles.cinemaHall__seatTags_item,styles.cinemaHall__seatTags_itemWheelChair )}>wheelchair</li>
                    <li className={cn(styles.cinemaHall__seatTags_item,styles.cinemaHall__seatTags_itemSofa)}>sofa</li>
                </ul>
            </div>
            <div className={styles.cinemaHall__seatSelection}>
                <div className={styles.cinemaHall__seatSelection_screen}></div>
                <div className={styles.cinemaHall__seatSelection_places}>
                    {seats.map((seat, index) => (
                        <div className={styles.cinemaHall__seatSelection_row}>
                            <div className={styles.cinemaHall__seatSelection_rowNumber}>
                                {index + 1}
                            </div>
                            <div className={styles.cinemaHall__seatSelection_seatsRow}>
                                {seat.map((el) => (
                                    <span className={cn(styles.cinemaHall__seatSelection_seat, {
                                        [styles.sofa]: index >= seats.length - 2
                                    })}>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UIButton text='Next' width='15%' className={styles.cinemaHall__btn}/>
        </div>
    );
};
