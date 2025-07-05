import Button from "./Button";


const SectionContact = ({title="Хочете дізнатися точну вартість?", text, name="Розрахувати"}) => {
    return ( <>
    <section className="my-10">
        <div className="bg-[#F8F7F0] px-6 py-12 max-w-6xl mx-auto rounded-2xl" >
            <p className="text-center text-4xl">{title}</p>
            {text && <p>{text}</p>}
            <div className="flex justify-center my-2">
            <Button name={name}></Button>
            </div>
        </div>
    </section>
    </> );
}
 
export default SectionContact;