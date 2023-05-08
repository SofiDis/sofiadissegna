import { FunctionComponent, ReactNode } from 'react';
import SdIcon from '@/components/SdIcon/SdIcon';
import './sd-list-item.scss';

type Props = {
  iconName?: string;
  to?: string;
  title?: string;
  class?: string;
  hasChildren?: boolean;
};

// type IconProps = {
//   iconName?: string;
//   customIcon?: ReactNode;
// } & typeof defaultIconProps;

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

// const ButtonIcon = (props: IconProps) => {
//   const { iconName, customIcon, ...rest } = props;

//   if (!customIcon && !iconName) return <></>;

//   return (
//     <span {...rest}>
//       {props.iconName && !props.customIcon && (
//         <SdIcon iconName={props.iconName}></SdIcon>
//       )}
//       {props.customIcon}
//     </span>
//   );
// };

//ButtonIcon.defaultProps = defaultIconProps;

const SdListItem: FunctionComponent<Props> = (props) => {
  return (
    <div className="sd-list-item">
      {props.iconName && (
        <SdIcon
          className="sd-list-item__icon"
          iconName={props.iconName}
        ></SdIcon>
      )}
      <div className="sd-list-item__body">My list item here</div>
    </div>
  );
};

export default SdListItem;
