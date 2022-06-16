import styles from './header.module.scss'
import cn from "classnames";
import { UIButton } from '../../ui/uiButton';

export const Header = () => { 

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}/>
            <nav className={styles.header__nav}>
                <ul className={styles['header__nav-list']}>
                    <li className={styles['header__nav-item']}> Films & events </li>
                    <li className={styles['header__nav-item']}> Venue hire </li>
                    <li className={styles['header__nav-item']}> Memberships & gifts </li>
                    <li className={styles['header__nav-item']}> FAQ </li>
                    <li className={cn(styles['header__nav-item'], styles['header__nav-search'])} /> 
                    <UIButton text='fast booking' width='15%'/>
                </ul>
            </nav>
        </header>
    )
} 
