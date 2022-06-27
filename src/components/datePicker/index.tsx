import { useState } from 'react'
import { UIButton } from '../../ui/uiButton'
import styles from './datePicker.module.scss'
import cn from 'classnames'
import { IDataPickerProps } from './datePicker.props'


export const DatePicker = ({dates}: IDataPickerProps) => {
    const [period, setPeriod] = useState<'today' | 'all week'>('today')
    const [event, setEvent] = useState<'events' | 'films'>('films')
    const [selectedDate, setSelectedDate] = useState<number | null>(null)

    function choosePeriod() {
        period === 'today' ? setPeriod('all week') :setPeriod('today') 
    }

    function chooseEvent() {
        event === 'films' ? setEvent('events') : setEvent('films')
    }

    return (
        <div className={styles.datePicker}>
            <div className={styles.datePicker__calendar}>
                    <button onClick={choosePeriod} className={cn(styles.datePicker__calendar_item, styles.datePicker__calendar_itemFilter)}>
                        <span> {period} </span>
                    </button>
                    <button onClick={chooseEvent} className={cn(styles.datePicker__calendar_item, styles.datePicker__calendar_itemFilter)}>
                        <span> {event} </span>
                    </button>
                    {dates.map((date, index) =>  <button onClick={() => setSelectedDate(index)}
                        key={date.date} className={cn(styles.datePicker__calendar_item, styles.datePicker__calendar_date, {
                            [styles.datePicker__calendar_itemSelected]: index === selectedDate
                        })}>
                            <span className={styles.datePicker__calendar_date_number}>{date.date}</span>
                            <span className={styles.datePicker__calendar_date_month}>{date.month}</span>
                            <span className={styles.datePicker__calendar_date_day}>{date.day}</span>
                    </button>)}
            </div>      
        </div>
    )
} 
