import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/banner.png";

const Bannner = () => {
  return (
    <div
      className=" h-[500px]  w-full bg-cover bg-center"
      style={{
        backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${banner})`,
      }}
    >
      <div className="flex justify-start h-full">
        <div className="md:ml-16 mt-28">
          <h2 className="text-white md:text-6xl font-bold text-2xl">
            Welcome To Group Guru
          </h2>
          <h3 className="md:text-xl text-white md:font-bold font-Zilla-Slab">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={2000}
              deleteSpeed={35}
              loop={0}
              typeSpeed={90}
              words={[
                "Connect, learn, and grow together with Group Guru's innovative study platform.",
                " Let Group Guru be your digital study companion, fostering knowledge-sharing effortlessly",

                "Experience collaborative learning like never before with Group Guru",
              ]}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};
// w-full bg-no-repeat bg-cover
export default Bannner;
