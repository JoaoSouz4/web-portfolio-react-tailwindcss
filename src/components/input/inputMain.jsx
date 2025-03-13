export default function InputMain({ placeholder, isChange, type, value }) {
  return (
    <input
      value={value}
      type={type}
      onChange={isChange}
      placeholder={placeholder}
      className="px-6 py-4 bg-light text-dark rounded-lg w-full "
    />
  );
}
