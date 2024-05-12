import faq from "../../assets/faq.jpg";

const FAQ = () => {
  return (
    <div className="md:max-w-6xl mx-auto mt-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-Jaini">
          Frequently Ask Question
        </h2>
      </div>
      <div className="mt-16 flex md:flex-row justify-evenly items-center">
        <div className="md:w-1/2">
          <img className="md:w-3/4 rounded-md" src={faq} alt="" />
        </div>
        {/* faq */}
        <div className="md:w-1/2">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4"/>
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
