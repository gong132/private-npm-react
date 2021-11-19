export interface OptionProps {
    key?: string | number;
    val?: string;
    label?: string | number;
    value?: string;
}
export interface SelectProps {
    Options: OptionProps[];
    value: string | number | undefined;
    restProps?: object;
    onChange: (e: any, rest?: any) => void;
    className?: any;
    placeholder?: string;
    label?: string;
}
declare const CusSelect: (props: SelectProps) => JSX.Element;
export default CusSelect;
