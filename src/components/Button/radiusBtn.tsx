// 橙色圆角按钮
import type { ReactNode } from 'react';
import React from 'react';
import { Button } from 'antd';
import styles from './radiusBtn.less';

interface RadiusBtnProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  style?: any;
}

const RadiusBtn = (props: RadiusBtnProps) => {
  const { icon, text, onClick, style } = props;
  return (
    <Button
      {...props}
      className={styles.btn}
      style={style}
      icon={icon}
      // onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default RadiusBtn;
