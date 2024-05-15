import faq from "../../assets/faq.jpg";

const FAQ = () => {
  return (
    <div className="md:max-w-6xl mx-auto mt-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-Jaini">
          Frequently Ask Question
        </h2>
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-1/2">
          <img className="md:w-3/4 rounded-md" src={faq} alt="" />
        </div>
        {/* faq */}
        <div className="md:w-1/2">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold text-[#024950]">
                Who Are We?
              </div>
              <div className="collapse-content">
                <p className="border p-2 rounded-md font-bold">
                  Group Guru is a dynamic online platform dedicated to enhancing
                  collaborative learning experiences for students of all ages
                  and disciplines. Our mission is to provide a comprehensive,
                  user-friendly environment where learners can connect, share
                  knowledge, and achieve academic success together.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold text-[#024950]">
              How do I create a study group on Group Guru?
              </div>
              <div className="collapse-content">
                <p  className="border p-2 rounded-md font-bold">Go to Register page create an account.Then go to  create assignment page.and submit assignment info.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold text-[#024950]">
              Features of Group Guru Website
              </div>
              <div className="collapse-content">
                <p  className="border p-2 rounded-md font-bold">It's a group study online assignment platform.You can create your own assignment.And Submit any assignment.also can evaluation assignments.  </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold text-[#024950]">
                How can I ensure a productive study session?
              </div>
              <div className="collapse-content">
                <p  className="border p-2 rounded-md font-bold">
                  To ensure a productive study session: <br/> <strong>Set Goals:</strong> Define clear
                  objectives.<strong> Prepare Materials:</strong> Have everything ready in
                  advance. <strong>Create an Agenda:</strong> Outline topics and allocate time.
                  <strong>Minimize Distractions:</strong> Choose a quiet space and use "Do Not
                  Disturb" mode. <strong>Engage Actively:</strong> Participate and collaborate
                  with group members. <strong>Follow Up:</strong> Review notes and follow up on
                  tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
