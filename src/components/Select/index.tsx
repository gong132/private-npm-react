import React from "react";
import { Select } from "antd";
import styles from "./select.less";
import cn from 'classnames';

export interface OptionProps {
  key?: string | number;
  val?: string;
  label?: string | number;
  value?: string
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

const CusSelect = (props: SelectProps) => {
  const {
    Options,
    restProps,
    value,
    onChange,
    className,
    placeholder,
    label,
  } = props;
  return (
    <div className={cn(className, styles.cusSelect)}>
      {label && <span>{label}</span>}
      <Select
        // style={{ width: 126 }}
        // suffixIcon={<img src={select_img} />}
        value={value}
        onChange={onChange}
        {...restProps}
        placeholder={placeholder || "请选择"}
        dropdownClassName={styles.dropdown}
        dropdownMatchSelectWidth={false}
        className="findfit_select"
        suffixIcon={
          <span className="findfit_icon findfit_icon_arrow "></span>
        }
        defaultOpen={false}

      >
        {Options.map((v) => (
          <Select.Option key={v?.key || v?.value} value={v?.key || v?.value || ''}>
            {v?.val || v?.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CusSelect;
