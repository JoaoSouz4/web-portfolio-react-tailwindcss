export function ButtonLabel({ label, isBold, color }) {
  return (
    <label
      className={
        isBold == true
          ? `font-bold cursor-pointer text-sm lg:text-lg text-${color}`
          : ` font-bold text-${color} lg:text-lg cursor-pointer text-sm`
      }
    >
      {label}
    </label>
  );
}
