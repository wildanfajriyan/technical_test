const CardTestimoni = () => {
  return (
    <div className="shadow-xl p-6 border">
      <div className="flex gap-2 items-center">
        <figure>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="pp"
            width={40}
            className="rounded-full"
          />
        </figure>
        <span className="font-sans font-medium">Dewi</span>
      </div>
      <p className="mt-3 text-left">
        Rasa Nusantara bikin saya nostalgia dengan masakan ibu. Rendangnya
        juara!
      </p>
    </div>
  );
};

export default CardTestimoni;
