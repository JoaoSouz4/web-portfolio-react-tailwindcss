export default function Title({ text, icon: Icon }) {
  return (
    <div className="flex justify-center gap-2 items-center md:justify-start">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-primary text-center">
        {text}
      </h1>
      {Icon && <Icon className="text-primary text-xl md:text-4xl " />}
    </div>
  );
}
