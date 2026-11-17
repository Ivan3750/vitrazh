import Button from "@/app/components/Button";

const Thanks = () => {
  return (
    <>
      <div className="bg-[#171717] flex justify-center items-center w-screen max-w-full h-screen max-h-full px-[10px] py-[60px]">
        <div className="flex flex-col text-center w-[600px] mb-0 items-center gap-[15px]">
          <h1 className="!text-[120px] !text-[#e9e9e9] !leading-[120px] font-light">Дякуємо!</h1>
          <h2 className="!text-[38px] !capitalize !text-[#e9e9e9]">
            Вашу заявку успішно надіслано
          </h2>
          <div className="!text-[22px] !text-[#a3a3a3] text-balance max-w-[500px]">
            Ми зв’яжемось із вами найближчим часом, щоб відповісти на запит або уточнити деталі.
          </div>

          <Button
            link="/"
            name="На головну сторінку"
            className="my-4 mx-auto block"
          />
        </div>
      </div>
    </>
  );
};

export default Thanks;
