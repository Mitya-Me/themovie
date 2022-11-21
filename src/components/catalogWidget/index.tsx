import styles from './catalogWidget.module.scss'
import { ReactComponent as CatalogBookIcon } from '../../assets/icons/catalogWidget/catalogBook.svg'
import { useEffect, useState } from 'react'


export const CatalogWidget = () => {
    const [tooltipVisibility, setTooltipVisibility] = useState(true)
    const [closingButtonVisibility, setClosingButtonVisibility] = useState(false)

    const closeTooltip = () => setTooltipVisibility(false)

    useEffect(() => {
        setTimeout(() => {
            setTooltipVisibility(false)
            setTimeout(() => {
                setTooltipVisibility(true)
                setClosingButtonVisibility(true)
            }, 5000)
        }, 3000)
    }, [])


    return (
        <div className={styles.catalogWidget} title={tooltipVisibility ? '' : 'download the new catalog 2023'}>
            {
                tooltipVisibility ? (
                    <div className={styles.catalogWidget__tooltip}>
                        <div className={styles.catalogWidget__tooltip_wrap}>
                            <span>NEW!</span> catalog 2023
                            {
                                closingButtonVisibility
                                    ? <button onClick={closeTooltip} className={styles.catalogWidget__tooltip_closeBtn} />
                                    : null
                            }
                        </div>
                    </div>
                ) : null
            }
            <a className={styles.catalogWidget__dwnl} href="CatalogueOutdoor_2023.pdf" download>
            <CatalogBookIcon className={styles.catalogWidget__icon} />
            </a>
        </div>
    )
}


/*
На произвольной странице необходимо разработать функционал фиксированного виджета, 
при нажатии на который будет скачиваться файл каталога.
При открытии страницы появляется сноска(текст) у виджета и держится 3 сек.,
 далее она исчезает на несколько секунд и снова появляться, но, например,
  уже мигает или трясется (анимация). Также сноску можно закрыть крестиком.
*/