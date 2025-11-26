export default function Stars({ rating, onRate }) {
  return (
    <div className="flex">
      {[1,2,3,4,5].map(i => (
        <span
          key={i}
          onClick={() => onRate(i)}
          className={`cursor-pointer text-2xl ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
