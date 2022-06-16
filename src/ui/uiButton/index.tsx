import { IUiButtonProps } from "./uiButton.props";
import styles from './uiButton.module.scss';

export const UIButton = ({text, width = '45%'}:IUiButtonProps) => { 
    return (
        <button className={styles.button} style={{width: width}}>
            {text}
        </button>
    )
} 
