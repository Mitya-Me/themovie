import { ILayoutProps } from "./layout.props"
import styles from './layout.module.scss'
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const Layout = ( { children }:ILayoutProps) => { 

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}> { children } </main>
            <Footer/>
        </div>
    )
} 

