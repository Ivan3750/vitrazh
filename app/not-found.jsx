import Button from "./components/Button";



const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen max-w-full h-screen max-h-full px-[10px] py-[60px]">
        <div className="flex flex-col text-center w-[600px] mb-0 items-center gap-[5px]">
          <h1 className="!text-[200px] !text-[#0f0f0f] !leading-[200px] font-normal">404</h1>
          <h2 className="!text-[55px] !capitalize">Не знайдено</h2>
          <div className="!text-[24px] !text-[#555555] text-balance">
            Сторінка, яку ви шукаєте, не існує або була переміщена          </div>
          <Button link="/" name="на головну сторінку" className="my-0 mx-auto block"/>
        </div>
      </div>
    </>
  );
};

export default NotFound;
