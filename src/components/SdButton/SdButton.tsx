import { FunctionComponent, ReactNode } from 'react';
import SdIcon from '../SdIcon/SdIcon';
import SdInteractable from '../SdInteractable/SdInteractable';
import './sd-button.scss';

type Props = {
  children: ReactNode;
  to?: string;
  title: string;
  class?: string;
  prependIconName?: string;
  prependIcon?: ReactNode;
  appendIconName?: string;
  appendIcon?: ReactNode;
};

type IconProps = {
  iconName?: string;
  customIcon?: ReactNode;
} & typeof defaultIconProps;

const defaultIconProps = {
  iconName: 'moon',
};

/* const Icon = (props: { iconName: string }) => {
  return <span className="icon">Real Icon</span>;
};

const PrependIcon = (props: IconProps) => {
  return <span className="icon">Real Icon</span>;
}; */

//fa-solid fa-heart

const ButtonIcon = (props: IconProps) => {
  const { iconName, customIcon, ...rest } = props;

  if (!customIcon && !iconName) return <></>;

  return (
    <span {...rest}>
      {props.iconName && !props.customIcon && (
        <SdIcon iconName={props.iconName}></SdIcon>
      )}
      {props.customIcon}
    </span>
  );
};

ButtonIcon.defaultProps = defaultIconProps;

const SdButton: FunctionComponent<Props> = (props) => {
  return (
    <SdInteractable title={props.title}>
      <ButtonIcon className="toast" iconName={props.prependIconName} />

      {props.children}

      <ButtonIcon />
    </SdInteractable>
  );

  switch (true) {
    case Boolean(props.to):
      return (
        <SdInteractable
          className={props.class}
          title={props.title}
          to={props.to}
        >
          {props.children}
        </SdInteractable>
      );
    default:
      return (
        <SdInteractable className={props.class} title={props.title}>
          {props.children}
        </SdInteractable>
      );
  }
};

export default SdButton;
