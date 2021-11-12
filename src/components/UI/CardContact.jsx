export default function CardContact(props) {
  const { url, img, id } = props.contact;
  return (
    <button onClick={() => window.open(url)}>
      <img
        src={img}
        alt={id}
        className={`w-auto transform duration-500 hover:lg:-translate-y-5 hover:-translate-y-2 ${props.className}`}
      />
    </button>
  );
}
