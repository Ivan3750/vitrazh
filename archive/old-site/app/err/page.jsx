import Button from "@/app/components/Button";

const Thanks = () => {
  return (
    <>
      <div className="bg-[#171717] flex justify-center items-center w-screen max-w-full h-screen max-h-full px-[10px] py-[60px]">
        <div className="flex flex-col text-center w-[600px] mb-0 items-center gap-[15px]">
          <h1 className="!text-[70px] !text-[#e9e9e9] !leading-[70px] font-light">Виникла помилка!</h1>
          <h2 className="!text-[30px]   !text-[#e9e9e9]">
            Спробуйте знову пізніше
          </h2>

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
