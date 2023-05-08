import { SdButton } from '@/components';
import SdLayout from '@/components/00-basic/SdLayout/SdLayout';
import SdListItem from '@/components/02-molecules/SdListItem/SdListItem';
import useVModel from '@/utils/useValueModel';

function FormVmodel() {
  const formInput = useVModel('on change');
  const formInputBlur = useVModel('on blur', { lazy: true });

  if (formInput.value == 'mytest') {
    console.log('old');
    formInput.value = 'new value';
  }

  return (
    <form>
      <p>New utility to replicate Vue</p>
      {/* Input react onBlur */}
      <input id="bar" {...formInputBlur} />
      <p> Reacts onBlur </p>
      {/* Check type here. */}
      <p>{formInputBlur.defaultValue}</p>

      {/* Input react onChange */}
      <input id="bar" {...formInput} />
      <p> Reacts onChange </p>
      <p>{formInput.value}</p>
    </form>
  );
}

function UiLibrary() {
  return (
    <SdLayout sideContent={'test'}>
      <h1> My SD Components </h1>
      <SdButton to="test" title="my title">
        My Button
      </SdButton>
      <SdButton title="my title">My Button</SdButton>
      <SdListItem iconName="fa-heart" />
      <FormVmodel />
    </SdLayout>
  );
}

// @LEARNING
// Multiple inputs managed with setState.
// function TestInputs() {
//   const [inputValues, setInputValues] = useState({});

//   const handleChange = ({ target }) => {
//     setInputValues({
//       ...inputValues,
//       [target.id]: target.value,
//     });
//   };

//   console.log(inputValues);

//   return (
//     <form>
//       <input id="foo" onChange={handleChange} />
//       <input id="bar" onChange={handleChange} />
//     </form>
//   );
// }

export default UiLibrary;
