import Button from '../../../../components/button';

export function CardAction({ label, action, style, color }) {
  return (
    <Button.Root style={style} action={action}>
      <Button.Label color={color} label={label} />
    </Button.Root>
  );
}
