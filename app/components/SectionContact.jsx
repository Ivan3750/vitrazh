import Button from "./Button";
 
const SectionContact = ({ title = "Хочете дізнатися точну вартість?", text, name = "Розрахувати" }) => {
  return (
    <section className="my-10">
      <div className="bg-[#F8F7F0] px-6 py-12 max-w-6xl mx-auto rounded-2xl text-center">
        <p className="text-4xl font-semibold">{title}</p>
        {text && <p className="mt-4 text-lg">{text}</p>}
        <div className="flex justify-center mt-6">
            <Button name={name} link="/calc" />
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
