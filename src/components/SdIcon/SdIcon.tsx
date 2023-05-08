import type { FunctionComponent, ReactElement, ReactNode } from "react";

type Props = {
  iconName: string;
  className?: string;
};

const SdIcon: FunctionComponent<Props> = (props) => {
  return <i className={props.className}></i>;
};

export default SdIcon;
