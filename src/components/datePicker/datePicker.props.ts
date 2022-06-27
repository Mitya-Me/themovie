export interface IDataPickerDate {
    date: number;
    month: string;
    day: string;
}

export interface IDataPickerProps {
    dates: IDataPickerDate[];
}