import JurnalSoni1 from "../../assets/logos/jurnal_soni1.png";
import JurnalSoni2 from "../../assets/logos/jurnal_soni2.png";
import JurnalSoni3 from "../../assets/logos/jurnal_soni3.png";
const JournalCover = ({ imageUrl }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <img 
          src={imageUrl} 
          alt="Journal cover" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const LatestIssues = () => {
  const covers = [
    JurnalSoni1,
    JurnalSoni2,
    JurnalSoni3
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#1a365d] text-4xl font-bold leading-[2.40rem] text-left">
          SO'NGGI SONI
        </h2>
        <a 
          href="#" 
          className="text-[#21466D59]text-lg font-semibold leading-[1.57rem] text-left hover:text-primary-700"
        >
          Barcha sonlar &gt;
        </a>
      </div>

      <div className="max-w-[62.50rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {covers.map((cover, index) => (
          <JournalCover key={index} imageUrl={cover} />
        ))}
      </div>
    </div>
  );
};

export default LatestIssues;

