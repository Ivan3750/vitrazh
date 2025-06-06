import b from "@/app/assets/images/recovery/bg.jpeg";
import dh from "@/app/assets/images/recovery/destroyedhouse.webp";
import card from "@/app/assets/images/recovery/Ecard.png";
import consultation from "@/app/assets/images/icons/consultation.png"
import delivery from "@/app/assets/images/icons/delivery.png"
import document from "@/app/assets/images/icons/document.png"
import relax from "@/app/assets/images/icons/relax.png"
import report from "@/app/assets/images/icons/report.png"
import length from "@/app/assets/images/icons/length.png"
import Image from "next/image";

const Recovery = () => {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          єВІДНОВЛЕННЯ
        </h1>
      </section>
      <section className="py-[100px]">
        <div className="mc">
          <div className="flex justify-between gap-[40px]">
            <div className="">
              <h2 className="text-[64px]">Що таке єВідновлення?</h2>
              <p className="w-[600px] text-[20px] text-[#555555]">
                єВідновлення — це державна програма підтримки українців, чиї
                домівки були пошкоджені або зруйновані внаслідок повномасштабної
                війни. Вона дозволяє отримати компенсацію або допомогу для
                ремонту приватного житла — зокрема, заміну вікон, дверей,
                покрівлі, утеплення тощо.
              </p>

              <p className="w-[600px] text-[20px] text-[#555555]">
                Програма реалізується через застосунок Дія та передбачає як
                фінансову допомогу, так і можливість отримати будівельні послуги
                напряму від підрядників, які мають договір з державою.
              </p>
            </div>
            <div>
              <Image
                src={dh}
                width={680}
                height={380}
                className="rounded-sm"
                alt="Пошкодженне майно"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="mc">
          <h2 className="text-[64px] text-center mb-[50px]">Як ми можемо допомогти?</h2>
          <div className="bg-[#F8F7F0] flex flex-wrap">
            <div className="border-b border-r border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={consultation}/></div>
              <div>
                <h3 className="text-[28px]">Консультація</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Пояснюємо умови єВідновлення та супроводжуємо на кожному
                  етапі.
                </p>
              </div>
            </div>
            <div className="border-b border-r border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={length}/></div>
              <div>
                <h3 className="text-[28px]">Точне вимірювання</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Підбираємо вікна та двері відповідно до технічних вимог.
                </p>
              </div>
            </div>
            <div className="border-b  border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={document}/></div>
              <div>
                <h3 className="text-[28px]">Офіційні документи</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Готуємо договір та повний пакет документів, які приймає платформа Дія.
                </p>
              </div>
            </div>
            <div className="border-b border-r border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={delivery}/></div>
              <div>
                <h3 className="text-[28px]">Повний сервіс</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Виготовлення, доставка та монтаж — все під ключ від нашої команди.
                </p>
              </div>
            </div>
            <div className="border-b border-r border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={report}/></div>
              <div>
                <h3 className="text-[28px]">Фото-звіт</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Робимо фото до і після для звітування в єВідновленні.
                </p>
              </div>
            </div>
            <div className="border-b  border-[#E7E7E7] p-[48px] flex flex-col gap-[100px] justify-between">
              <div><Image src={relax}/></div>
              <div>
                <h3 className="text-[28px]"> Спокій та впевненість</h3>
                <p className="text-[18px] text-[#555] w-[300px]">
                  Прозора співпраця, якісні матеріали та жодних прихованих витрат.
                </p>
              </div>
            </div>
           </div>
        </div>
      </section>
          <section>
              <div className="mc flex py-[150px] justify-between">
                <div>
                  <h2 className="text-[64px]">Послідовність Замовлення</h2>
                  <Image src={card} width={600} height={450} alt="Процес роботи" className="mt-[40px]" />
                </div>
      
                <div className="flex gap-[70px] flex-col border-dashed border-l-[1px] border-[#C7C6C2] pl-[40px] relative">
                  
                    <div className="max-w-[350px] spa relative" >
                      <div className="absolute -left-[47px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                      <span className="absolute -left-[106px] top-[5px] text-[#0F0F0F] font-bold text-[16px] whitespace-nowrap">
                        Крок 1
                      </span>
      
                      <h3 className="text-[28px] text-[#0F0F0F]">Заявка та консультація</h3>
                      <p className="text-[18px] text-[#555555]">
                        Безкоштовний виїзд на замір і прорахунок вартості.
                        Індивідуальні поради щодо найкращих рішень для вашого будинку.
                      </p>
                    </div>
                    <div className="max-w-[350px] spa relative" >
                      <div className="absolute -left-[46px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                      <span className="absolute -left-[106px] top-[5px] text-[#0F0F0F] font-bold text-[16px] whitespace-nowrap">
                        Крок 2
                      </span>
      
                      <h3 className="text-[28px] text-[#0F0F0F]">Підтвердження та договір</h3>
                      <p className="text-[18px] text-[#555555]">
                        Узгоджуємо замовлення, фіксуємо деталі та строки. Проводимо повторний замір перед підписанням договору.
                      </p>
                    </div>
                    <div className="max-w-[350px] spa relative" >
                      <div className="absolute -left-[46px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                      <span className="absolute -left-[106px] top-[5px] text-[#0F0F0F] font-bold text-[16px] whitespace-nowrap">
                        Крок 3
                      </span>
      
                      <h3 className="text-[28px] text-[#0F0F0F]">Виготовлення та монтаж</h3>
                      <p className="text-[18px] text-[#555555]">
                        Вироби виготовляються на заводі. Монтаж виконується сертифікованими спеціалістами з дотриманням усіх норм.
                      </p>
                    </div>
                    <div className="max-w-[350px] spa relative" >
                      <div className="absolute -left-[46px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                      <span className="absolute -left-[106px] top-[5px] text-[#0F0F0F] font-bold text-[16px] whitespace-nowrap">
                        Крок 4
                      </span>
      
                      <h3 className="text-[28px] text-[#0F0F0F]">Гарантія та сервіс</h3>
                      <p className="text-[18px] text-[#555555]">
                        Безкоштовний виїзд на замір і прорахунок вартості.
                        Індивідуальні поради щодо найкращих рішень для вашого будинку.
                      </p>
                    </div>
                </div>
              </div>
            </section>
    </>
  );
};

export default Recovery;
