import b from "@/app/assets/images/hero/bg.jpg"


const Contact = () => {
    return ( <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url(${b.src})`,
              }}
            />
            <h1 className="relative text-white text-4xl font-bold z-10">
              Зв'яжіться з нами
            </h1>
          </section>
          <section></section>
    </> );
}
 
export default Contact;