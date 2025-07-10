import Image from "next/image";
import Link from "next/link";
import white from "@/app/assets/images/products/mosquito/Rollo_profil_white.png";
import brown from "@/app/assets/images/products/mosquito/Rollo_profil_brown.png";
import black from "@/app/assets/images/products/mosquito/Rollo_profil_anthracite (1).png";
import anthracite from "@/app/assets/images/products/mosquito/Rollo_profil_anthracite.png";
const colors = [
  { src: white, label: "Білий глянець" },
  { src: brown, label: "Коричневий глянець" },
  { src: black, label: "Антрацит глянець" },
  { src: anthracite, label: "Золотий дуб структурний" },
];

const furniture = [
  { src: "/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/Black.png", label: "Чорний" },
];

const mesh = [
  { src: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/plisse_sitka.jpg", label: "Сітка PLISSE" },
];

const profiles = [
  {
    id: "PL5",
    img: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/PL_5.gif",
    description:
      "Система призначена для закривання вікон простої форми. PL5 має однаково великі профілі в правій та лівій частині конструкції. Відкривання відбувається у вертикальному напрямку.",
  },
  {
    id: "PL4",
    img: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/PL_4.gif",
    description:
      "Система призначена для закривання вікон простої форми. PL4 має однаково великі профілі в нижній та верхній частині конструкції. Відкривання відбувається в горизонтальному напрямі (дві стулки).",
  },
  {
    id: "PL3",
    img: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/PL_3.gif",
    description:
      "Система призначена для закривання вікон простої форми. PL3 має невеликий поріг в нижній частині конструкції, що дозволяє використовувати її для дверних проємів. Відкривання відбувається в горизонтальному напрямі (дві стулки).",
  },
  {
    id: "PL2",
    img: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/PL_2.gif",
    description:
      "Система призначена для закривання вікон простої форми. PL2 має однаково великі профілі в нижній та верхній частині конструкції. Відкривання відбувається в горизонтальному напрямі.",
  },
  {
    id: "PL1",
    img: "/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/PL_1.gif",
    description:
      "Система призначена для закривання вікон простої форми. PL1 має невеликий поріг в нижній частині конструкції, що дозволяє використовувати її для дверних проємів. Відкривання відбувається в горизонтальному напрямі.",
  },
];

export default function PlisseScreens() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        PLISSE АНТИМОСКІТНІ СІТКИ
      </h2>
      <p className="mb-4">
        Антимоскітні сітки <strong>PLISSE</strong> — це зручна розсувна антимоскітна
        система для вікон, дверних проємів, балконів і альтанок.
      </p>
      <p className="mb-8">
        Конструкція складається з рами з алюмінієвих профілів, в якій переміщується
        плісоване полотно сітки. Полотно складається "гармошкою" і ховається в
        непомітний паз профілів. Конструкція займає мало місця і легко керується з
        обох сторін. Профілі щільно прилягають завдяки магнітам. Не потребує
        демонтажу на зиму.
      </p>

      {profiles.map((item) => (
        <div key={item.id} className="mb-10 border p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">{item.id}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image src={item.img} alt={item.id} width={300} height={300} className="rounded-lg" />
            <div>
              <h4 className="font-semibold">Доступні кольори профілів:</h4>
              <div className="flex flex-wrap gap-4 mt-2">
                {colors.map((color, i) => (
                  <div key={i} className="text-center w-24">
                    <Image src={color.src} alt={color.label} width={64} height={64} />
                    <p className="text-sm mt-1">{color.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm mt-3">
                <b>Доступне фарбування профіля під замовлення:</b><br />
                емальоване за системою RAL або з текстурою дерева
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h5 className="font-medium">Кольори фурнітури:</h5>
                  <div className="flex justify-center mt-2">
                    {furniture.map((f, i) => (
                      <div key={i} className="text-center w-20">
                        <Image src={f.src} alt={f.label} width={50} height={50} />
                        <p className="text-sm mt-1">{f.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium">Полотна сіток:</h5>
                  <div className="flex justify-center mt-2">
                    {mesh.map((m, i) => (
                      <div key={i} className="text-center w-24">
                        <Image src={m.src} alt={m.label} width={64} height={64} />
                        <p className="text-sm mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-medium">Розміри профілів:</h5>
                <Image
                  src="/images/gallery/Antymoskitni%20sitky/Sitky%20Plise/Rozmir.png"
                  alt="Розміри профілю"
                  width={300}
                  height={80}
                />
              </div>
              <p className="mt-3 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <Link
          href="/ua/kataloh-materialiv/antimoskitni-sitki"
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg text-lg font-semibold"
        >
          ДОСТУПНІ ВАРІАНТИ ПОЛОТЕН СІТОК
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        <h3 className="text-lg font-semibold">
          <Link href="/ua/hotova-produktsiia/antimoskitni-sitki/plisovani-antimoskitni-sitki/287-skhemi-antimoskitni-sitki-plisovani">
            Схеми антимоскітні сітки PLISSE
          </Link>
        </h3>
        <h3 className="text-lg font-semibold">
          <Link href="/ua/hotova-produktsiia/antimoskitni-sitki/plisovani-antimoskitni-sitki/288-rekomendovani-rozmiri-antimoskitnikh-sitok-plisovani">
            Рекомендовані розміри антимоскітних сіток PLISSE
          </Link>
        </h3>
      </div>
    </div>
  );
}
