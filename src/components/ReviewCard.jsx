const ReviewCard = ({ name, country, review }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition">
      <p className="text-gray-700 italic">“{review}”</p>
      <div className="mt-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{country}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
