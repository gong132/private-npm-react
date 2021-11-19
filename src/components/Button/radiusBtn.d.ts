import type { ReactNode } from 'react';
interface RadiusBtnProps {
    icon: ReactNode;
    text: string;
    onClick?: () => void;
    style?: any;
}
declare const RadiusBtn: (props: RadiusBtnProps) => JSX.Element;
export default RadiusBtn;
