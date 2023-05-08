/*
 * Vue style v-model utils.
 */
import { useState } from 'react';

type Options = {
  lazy: boolean;
};

function useValueModel(initialValue: string, opts?: Options) {
  const handlerName = opts?.lazy ? 'onBlur' : 'onChange';
  const valueName = opts?.lazy ? 'defaultValue' : 'value';

  const [value, setValue] = useState(initialValue);

  const handler = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return { [valueName]: value, [handlerName]: handler };
}

export default useValueModel;
