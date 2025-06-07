import Image from "next/image";

const profiles = [
  { name: "Профіль 1", img: "/profile1.jpg" },
  { name: "Профіль 2", img: "/profile2.jpg" },
  { name: "Профіль 3", img: "/profile3.jpg" },
];

const ProfileSelector = ({ data, setData, nextStep }) => {
  const handleSelect = (profile) => {
    setData((prev) => ({ ...prev, profile }));
    nextStep();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {profiles.map(({ name, img }) => (
        <div
          key={name}
          className="w-full max-w-[320px] cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleSelect({ name, img })}
        >
          <div className="bg-[#F8F7F0] aspect-[1/1] rounded flex items-center justify-center overflow-hidden">
            <Image src={img} alt={name} width={320} height={320} className="object-cover w-full h-full" />
          </div>
          <h2 className="text-center text-[20px] mt-4 text-[#0F0F0F]">{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProfileSelector;
