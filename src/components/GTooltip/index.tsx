import { Tooltip } from "antd";

const TooltipButton = (props:any) => {
    const { children, tip, placement, ...restProps } = props
    return (
      <Tooltip title={tip} placement={placement}>
        {children}
      </Tooltip>
    )
  }
export default TooltipButton
  