import * as React from 'react';
import styles from './buttonNoBorder.less';
import cn from 'classnames';

interface ButtonNoBorderProps {
  src?: string;
  text: string;
  onClick: () => void;
  className?: any;
}
const ButtonNoBorder = (props: ButtonNoBorderProps) => {
  const { src, text, onClick, className } = props;
  return (
    <div onClick={onClick} className={cn(styles.btn, className)}>
      {src && <img src={src} alt="icon" />}
      <span>{text}</span>
    </div>
  );
};

export default ButtonNoBorder;
