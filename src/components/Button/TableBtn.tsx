import type { MouseEventHandler, CSSProperties } from 'react';
import React from 'react';
import styles from './TableBtn.less';
import cn from 'classnames';

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

const TableOptBtn = (props: OptBtnProps) => {
  const { img, style, text, textStyle, onClick, disabled, imgStyle, className } = props;
  return (
    <div
      className={cn(styles.box, disabled && styles.disabled, className)}
      style={style}
      onClick={disabled ? () => {} : onClick}
    >
      {img && <img className={styles.box_img} style={imgStyle} src={img} alt={text} />}
      <span className={cn(styles.box_text, disabled && styles.disabled_text)} style={textStyle}>
        {text}
      </span>
    </div>
  );
};

export default TableOptBtn;
