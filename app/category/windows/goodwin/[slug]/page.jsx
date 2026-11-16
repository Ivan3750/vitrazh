import Link from "next/link";
import { notFound } from "next/navigation";
import check from "@/app/assets/images/icons/check.svg";
import SectionContact from "@/app/components/SectionContact";
import FreeSize from "@/app/components/FreeSize";
import { goodwinProducts, getGoodwinProduct } from "../goodwinData";

export async function generateStaticParams() {
  return goodwinProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getGoodwinProduct(slug);
  if (!p) return { title: "Вікна | Вітраж" };

  const description = `${p.lead} ${p.description}`.slice(0, 160);
  return {
    title: `${p.name} - ${p.subtitle} | Вітраж`,
    description,
    openGraph: {
      title: p.name,
      description,
      url: `https://vitrazh.com.ua/category/windows/goodwin/${p.slug}`,
    },
  };
}

export default async function GoodwinProductPage({ params }) {
  const { slug } = await params;
  const p = getGoodwinProduct(slug);
  if (!p) notFound();

  const related = goodwinProducts
    .filter((x) => x.slug !== p.slug && x.material === p.material)
    .slice(0, 3);

  return (
    <>
      <section className="relative h-[340px] flex items-center justify-center bg-black overflow-hidden">
        <img
          src={p.photo.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="relative z-10 text-white font-bold px-4 text-center">
          {p.name}
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-8 text-[15px] text-gray-500">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <Link href="/category/windows" className="hover:underline">
          Вікна
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0F0F0F]">{p.name}</span>
      </div>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-full md:w-1/2 bg-[#F8F7F0] rounded-md aspect-square">
            <img
              src={p.img.src}
              alt={`${p.name} — профільна система`}
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-[14px] uppercase tracking-wide text-gray-400">
              {p.brand}
            </span>
            <h2 className="text-[40px] md:text-[50px] leading-tight mb-3">
              {p.name}
            </h2>
            <p className="text-[20px] text-[#0F0F0F] mb-5">{p.subtitle}</p>
            <p className="text-[#555555] text-[18px] mb-4">{p.lead}</p>
            <p className="text-[#555555] text-[18px] mb-8">{p.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/calc"
                className="bg-[#D8F422] py-[16px] px-[24px] rounded-sm uppercase font-semibold hover:bg-[#242323] hover:text-white transition-colors"
              >
                Замовити прорахунок
              </Link>
              <Link
                href="/contact"
                className="border border-[#0F0F0F] py-[16px] px-[24px] rounded-sm uppercase font-semibold hover:bg-[#0F0F0F] hover:text-white transition-colors"
              >
                Консультація
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Технічні характеристики
        </h3>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 w-full overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
                    Параметр
                  </th>
                  <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
                    Значення
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.tech.map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                      {k}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-[360px] shrink-0 bg-white border border-gray-200 rounded-md p-4">
            <img
              src={p.scheme.src}
              alt={`Переріз профілю ${p.name}`}
              loading="lazy"
              className="w-full object-contain"
            />
            <p className="text-center text-[14px] text-gray-500 mt-2">
              Переріз профільної системи
            </p>
          </div>
        </div>
      </section>

      {p.features.length > 0 && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Додаткові можливості
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.features.map(([title, text]) => (
              <div key={title} className="flex gap-3 bg-[#F8F7F0] p-6 rounded-md">
                <img src={check.src} alt="" className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Схожі системи
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/category/windows/goodwin/${r.slug}`}
                className="block transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-[#F8F7F0] aspect-square rounded overflow-hidden">
                  <img
                    src={r.img.src}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-center text-[20px] mt-4">{r.name}</h4>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SectionContact />
      <FreeSize />
    </>
  );
}
