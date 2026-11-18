import Image from "next/image";
import wds5s from "@/app/assets/images/products/windows/wds-5s-t.png";
import wds6s from "@/app/assets/images/products/windows/wds-6s-t.png";
import wds76md from "@/app/assets/images/products/windows/wds-76MD-t.png";
import wds76ad from "@/app/assets/images/products/windows/wds-76AD-t.png";
import rehauE60 from "@/app/assets/images/products/windows/REHAU_Euro-Design_60-t.png";
import rehauE70 from "@/app/assets/images/products/windows/REHAU_Euro-Design_70-t.png";
import rehauSMD from "@/app/assets/images/products/windows/REHAU_Synego_MD-t.png";

/* const profiles = [
  { name: "Профіль 1", img: "/profile1.jpg" },
  { name: "Профіль 2", img: "/profile2.jpg" },
  { name: "Профіль 3", img: "/profile3.jpg" },
];
 */
const profiles = [
  {
    id: 1,
    name: "WDS 5S",
    img: wds5s,
  },
/*   {
    id: 2,
    name: "WDS 6S",
    img: wds6s,
  }, */
  {
    id: 3,
    name: "WDS 76AD",
    img: wds76ad,
  },
  {
    id: 4,
    name: "WDS 76MD",
    img: wds76md,
  },
  {
    id: 5,
    name: "REHAU Euro-Design 60",
    img: rehauE60,
  },
  {
    id: 6,
    name: "REHAU Euro-Design 70",
    img: rehauE70,
  },
  {
    id: 7,
    name: "REHAU Synego MD",
    img: rehauSMD,
  },
];

const ProfileSelector = ({ data, setData, nextStep }) => {
  const handleSelect = (profile) => {
    setData((prev) => ({ ...prev, profile }));
    nextStep();
  };

  return (
    <section className="mc px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Оберіть профіль
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {profiles.map(({ name, img }) => {
          const isSelected = data?.profile?.name === name;

          return (
            <div
              key={name}
              className={`
              w-full max-w-[280px] cursor-pointer
              rounded-lg
              transition-transform duration-200
              ${
                isSelected
                  ? "scale-105 border-4 border-[#D8F422] "
                  : "hover:scale-105 border border-transparent"
              }
               
            `}
              onClick={() => handleSelect({ name, img })}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelect({ name, img });
                }
              }}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Вибрати профіль ${name}`}
            >
              <div className="bg-[#F8F7F0] aspect-square rounded flex items-center justify-center overflow-hidden">
                <img
                  src={img.src}
                  alt={name}
                  width={280}
                  height={280}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>
              <h2 className="text-center text-[20px] mt-4 text-[#0F0F0F]">
                {name}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileSelector;
