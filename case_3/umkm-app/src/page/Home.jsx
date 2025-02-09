import { FaBookOpen, FaBowlFood } from 'react-icons/fa6';
import HeadingSection from '../components/HeadingSection';
import Card from '../components/Card';
import CardImage from '../components/CardImage';
import CardTestimoni from '../components/CardTestimoni';

const Home = () => {
  return (
    <div>
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://cdn.antaranews.com/cache/1200x800/2024/09/15/Photo-2-Seribu-Rasa.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: -999,
        }}
      >
        <div className="text-white">
          <div className="flex flex-col h-screen">
            <header className="flex flex-col items-center">
              <h1 className="text-4xl pt-8 font-royale">Rumah Nusantara</h1>
            </header>
            <main className="flex-1 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold font-sans">
                  Cita Rasa Tradisional dalam Setiap Gigitan
                </h1>
                <button className="bg-slate-50 text-black rounded-full p-4 font-bold mt-5 cursor-pointer font-sans hover:bg-yellow-600 hover:text-slate-50 transition-all">
                  Pesan Sekarang
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>

      <section className="py-24 mx-10 md:mx-16 lg:mx-64">
        <div className="text-center">
          <HeadingSection text="Tentang Kami" />
          <p className="text-xl">
            Di Rasa Nusantara, kami percaya bahwa makanan bukan hanya sekadar
            santapan, tetapi juga warisan budaya yang harus dijaga dan
            dilestarikan. Berawal dari kecintaan kami terhadap kuliner
            tradisional Indonesia, kami menghadirkan berbagai hidangan khas dari
            Sabang hingga Merauke dengan cita rasa autentik yang diwariskan
            secara turun-temurun.
          </p>
        </div>

        <div className="flex justify-center gap-5 mt-14">
          <Card text="60+ Pilihan Menu" icon={<FaBookOpen size={50} />} />
          <Card text="Rasa Autentik" icon={<FaBowlFood size={50} />} />
        </div>
      </section>

      <section className="py-24 mx-64">
        <div className="text-center">
          <HeadingSection text="WAJIB COBA!" />
          <div className="block m-auto lg:flex gap-5 justify-center">
            <CardImage
              imageUrl={
                'https://static.tripzilla.id/media/21572/conversions/1-1-Nasi-Uduk-126-By-photohenhen-w768.webp'
              }
            />

            <CardImage
              imageUrl={
                'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-150721062/no-brand_no-brand_full01.jpg'
              }
            />

            <CardImage
              imageUrl={
                'https://radartasikmalaya.tv/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-09-at-09.48.40.jpeg'
              }
            />

            <CardImage
              imageUrl={
                'https://cdn.idntimes.com/content-images/community/2024/11/snapinstaapp-466361941-2886709048161870-5398374586672427153-n-1080-58541641707f1a65d02c43848e85815c-fad556382303dc7a37d5327aa8cea824.jpg'
              }
            />

            <CardImage
              imageUrl={
                'https://kurio-img.kurioapps.com/24/02/26/7c8e73b0-bea1-4039-bcde-3b569a722e13.jpg'
              }
            />
          </div>
        </div>
      </section>

      <section className="py-24 mx-64">
        <div className="text-center">
          <HeadingSection text="Testimoni Konsumen" />
          <div className="block lg:flex gap-5 justify-center">
            <CardTestimoni />
            <CardTestimoni />
            <CardTestimoni />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
