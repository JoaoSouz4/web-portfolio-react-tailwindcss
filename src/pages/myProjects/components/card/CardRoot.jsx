export function CardRoot({ children }) {
  return (
    <div className="snap-center w-[95%] lg:max-w-[400px]  h-full flex shrink-0 grow-0 flex-col justify-around shrink-0 border-2 border-dark rounded-3xl p-4 gap-[1rem]">
      {children}
    </div>
  );
}
