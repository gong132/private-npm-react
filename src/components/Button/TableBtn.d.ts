import type { MouseEventHandler, CSSProperties } from 'react';
interface OptBtnProps {
    style?: CSSProperties;
    textStyle?: CSSProperties;
    img: any;
    text: string;
    imgStyle?: any;
    disabled?: boolean | undefined;
    onClick?: MouseEventHandler;
    className?: any;
}
declare const TableOptBtn: (props: OptBtnProps) => JSX.Element;
export default TableOptBtn;
