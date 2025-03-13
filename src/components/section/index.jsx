export default function Section({ children }) {
  return (
    <section className="snap-center snap-proximity relative h-[100vh] w-full flex flex-col  items-center justify-center gap-2">
      {children}
    </section>
  );
}
