const CardImage = ({ imageUrl }) => {
  return (
    <div className="max-h-72 max-w-56 overflow-hidden">
      <img
        src={imageUrl}
        alt="gambar"
        className="rounded-lg h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default CardImage;
