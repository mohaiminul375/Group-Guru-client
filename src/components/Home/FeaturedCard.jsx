

const FeaturedCard = ({assignment}) => {
    const {
        _id,
        photo_url,
        assignment_title,
        difficulty_level,
        assignment_marks,
        userEmail,
      } = assignment;
    return (
        <div className="w-full md:max-w-lg p-4 shadow-md bg-gray-50 rounded-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={photo_url}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <h3
              title={assignment_title}
              className="text-xl font-bold text-[#024950] cursor-pointer"
            >
              {assignment_title.length > 32
                ? assignment_title.slice(0, 32) + ".."
                : assignment_title}
            </h3>
            <h4 className="text-base font-bold">
              Difficulty Level: <span>{difficulty_level}</span>
            </h4>
            <h4 className="text-base font-bold">
              Assignment Marks: <span>{assignment_marks}</span>
            </h4>
          </div>

        </div>
      </div>
    );
};

export default FeaturedCard;