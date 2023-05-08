import React from "react";
import type { FunctionComponent, ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  title: string;
  to?: string;
  className?: string;
};

const SdInteractable: FunctionComponent<Props> = (props) => {
  const isLink = props.to || props.href;

  switch (true) {
    case props.disabled && !isLink:
      return <span>{props.children}</span>;

    case Boolean(props.to):
      return <a type="routerLink" {...props}></a>;

    case Boolean(props.href):
      return <a type="externalLink" {...props}></a>;

    default:
      return (
        <button type="button" {...props}>
          {props.children}
        </button>
      );
  }
};

export default SdInteractable;
