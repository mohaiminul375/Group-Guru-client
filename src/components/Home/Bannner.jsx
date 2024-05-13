import banner from "../../assets/banner.png";

const Bannner = () => {
  return (
    <div
    className=" h-[500px]  w-full bg-cover bg-center"
      style={{ backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${banner})` }}
    >
    <div className="flex justify-start h-full">
         <div className="md:ml-16 mt-28">
            <h2 className="text-white md:text-6xl">Welcome To Group Guru</h2>
            <h3 className="text-3xl text-[white]">Let Group Guru be your digital study companion, fostering knowledge-sharing effortlessly.</h3>
            <p>Connect, learn, and grow together with Group Guru's innovative study platform.</p>
            <p>Experience collaborative learning like never before with Group Guru</p>
         </div>
    </div>
    </div>
  );
};
// w-full bg-no-repeat bg-cover
export default Bannner;
