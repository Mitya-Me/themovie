import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IUiButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string;
    width?: number | string;
}