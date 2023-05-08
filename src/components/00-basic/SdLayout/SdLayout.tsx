import { Children, FunctionComponent, ReactNode } from "react";

import "./sd-layout.scss";

type Props = {
  children: ReactNode;
  sideContent?: ReactNode;
} & typeof defaultProps;

const defaultProps = {};

const SdLayout: FunctionComponent<Props> = (props) => {
  return (
    <div className="sd-layout__wrapper">
      {props.sideContent && (
        <div className="sd-layout__side">{props.sideContent}</div>
      )}
      <div className="sd-layout__main">{props.children}</div>
    </div>
  );
};

export default SdLayout;
