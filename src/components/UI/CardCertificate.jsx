export default function CardCertificate(props) {
  const { from, file, title } = props.certif;
  return (
    <div className="flex py-1 items-center">
      <div className="bg-light-blue w-3 h-3 rounded-lg absolute" />
      <div className="flex w-full justify-between text-sm md:text-base lg:text-lg text-light-grey font-medium pl-5">
        <span>{title}</span>
        <span
          className="text-light-blue text-right cursor-pointer transform duration-300 hover:-translate-y-2"
          onClick={() => window.open(file)}
        >
          {from}
        </span>
      </div>
    </div>
  );
}
