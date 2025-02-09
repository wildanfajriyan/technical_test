const Card = ({ text, icon }) => {
  return (
    <div
      className="w-44 h-32 flex flex-col items-center justify-center"
      style={{
        boxShadow: '0px 5px 18px 0px rgba(0,0,0,.1)',
      }}
    >
      <span className="hover:-translate-y-1 transition-all">{icon}</span>
      <h2 className="mt-5 font-sans font-medium">{text}</h2>
    </div>
  );
};

export default Card;
