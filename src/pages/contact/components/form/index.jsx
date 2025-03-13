import { useContext } from 'react';
import Button from '../../../../components/button';
import { FormContext } from '../../../../context/FormContext';

export default function Form({ children, submit, nameButton }) {
  const { formStates } = useContext(FormContext);
  return (
    <form className="flex flex-col gap-5 w-full h-full max-w-[500px]" onSubmit={submit}>
      <div className="flex flex-col gap-3">{children}</div>
      <Button.Root>
        {!formStates.isFetching ? (
          <Button.Label label={nameButton} isBold={true} />
        ) : (
          <div className="w-full flex justify-center items-center">
            <div className="w-[1.5rem] h-[1.5rem] rounded-full border border-2 border-t-transparent animate-spin light flex items-center justify-center"></div>
          </div>
        )}
      </Button.Root>
    </form>
  );
}
