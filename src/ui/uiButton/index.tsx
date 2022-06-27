import { IUiButtonProps } from "./uiButton.props";
import styles from './uiButton.module.scss';
import cn from 'classnames'

export const UIButton = ({text, width = '45%', className, ...props}:IUiButtonProps) => { 
    return (
        <button className={cn(styles.button, className)} style={{width: width}} {...props}>
            {text}
        </button>
    )
} 
