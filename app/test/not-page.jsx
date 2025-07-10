import Image from "next/image";
import Link from "next/link";

export default function RolloScreens() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        ROLLO АНТИМОСКІТНІ СІТКИ
      </h2>

      <p className="text-lg text-[#555] leading-relaxed mb-12">
        Ролетна антимоскітна сітка – це сучасне та практичне рішення для захисту приміщення від комах. Полотно сітки розміщується в компактному алюмінієвому коробі та за потреби опускається вниз або вбік (залежно від моделі) за допомогою пружинного механізму. Встановлюється як на вікна, так і на дверні прорізи, проста у використанні та догляді. Завдяки своїй конструкції дозволяє швидко прибирати сітку в короб, коли вона не потрібна, що забезпечує додаткову зручність і довговічність виробу.
      </p>

      {/* Горизонтальна */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Ролетна Горизонтальна</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src="/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/ROLLO_horyzontalni.gif"
            alt="ROLLO Горизонтальна"
            width={300}
            height={400}
            className="rounded-xl object-contain border"
          />

          <div className="flex-1 space-y-6">
            <div>
              <h5 className="font-semibold">Доступні кольори профілів:</h5>
              <div className="flex gap-4 mt-2">
                {[
                  { src: "Rollo_profil_white.png", label: "Білий" },
                  { src: "Rollo_profil_brown.png", label: "Коричневий" },
                  { src: "Rollo_profil_anthracite.png", label: "Антрацит" },
                ].map(({ src, label }) => (
                  <div key={label} className="text-center">
                    <Image
                      src={`/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/${src}`}
                      alt={label}
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <p className="text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Доступні кольори фурнітури:</h5>
              <div className="flex gap-4 mt-2">
                <div className="text-center">
                  <Image
                    src="/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/Black.png"
                    alt="Чорний"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <p className="text-sm mt-1">Чорний</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Розміри профілів:</h5>
              <div className="flex gap-4 mt-2">
                {["3.jpg", "2.jpg", "1.jpg"].map((file, i) => (
                  <Image
                    key={i}
                    src={`/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/${file}`}
                    alt={`Розміри профілю ${i + 1}`}
                    width={100}
                    height={100}
                    className="rounded-lg border"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Вертикальна */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Ролетна Вертикальна</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src="/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/ROLLO_vertykalni.gif"
            alt="ROLLO Вертикальна"
            width={300}
            height={400}
            className="rounded-xl object-contain border"
          />

          <div className="flex-1 space-y-6">
            <div>
              <h5 className="font-semibold">Доступні кольори профілів:</h5>
              <div className="flex gap-4 mt-2 flex-wrap">
                {[
                  { src: "Rollo_profil_white.png", label: "Білий глянець" },
                  { src: "Rollo_profil_brown.png", label: "Коричневий глянець" },
                  { src: "Rollo_profil_black.png", label: "Чорний матовий" },
                  { src: "Rollo_profil_anthracite.png", label: "Антрацит глянець" },
                ].map(({ src, label }) => (
                  <div key={label} className="text-center">
                    <Image
                      src={`/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/${src}`}
                      alt={label}
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <p className="text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Доступні кольори фурнітури:</h5>
              <div className="flex gap-4 mt-2">
                <div className="text-center">
                  <Image
                    src="/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/Black.png"
                    alt="Чорний"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <p className="text-sm mt-1">Чорний</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Розміри профілів:</h5>
              <div className="flex gap-4 mt-2">
                {["3.jpg", "2.jpg", "1.jpg"].map((file, i) => (
                  <Image
                    key={i}
                    src={`/images/gallery/Antymoskitni%20sitky/Sitky%20Roletni/${file}`}
                    alt={`Розміри профілю ${i + 1}`}
                    width={100}
                    height={100}
                    className="rounded-lg border"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/ua/kataloh-materialiv/antimoskitni-sitki"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-md font-medium transition"
        >
          ДОСТУПНІ ВАРІАНТИ ПОЛОТЕН СІТОК
        </Link>
      </div>
    </section>
  );
}
