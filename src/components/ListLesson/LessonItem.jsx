import { Link, useNavigate } from "react-router-dom";
import routes from "~/config/routes";

function LessonItem({ data, index, openModal }) {
  const navigate = useNavigate();

  return (
    <Link to={!openModal && `/lesson/${data._id}`} className="flex border my-4 rounded-md overflow-hidden">
      <div className="w-full flex justify-between p-4">
        <div className={`${!openModal ? "w-full" : "w-3/4"}`}>{`${index + 1}. ${
          data.nameLesson
        }`}</div>
        {openModal && (
          <div className="flex items-center">
            <button
              className="text-blue-500 px-4"
              onClick={() =>
                navigate(routes.handleLesson, {
                  state: { status: "Edit", courseId: data._id },
                })
              }
            >
              Sửa
            </button>
            <button
              className="text-red-500 px-4"
              onClick={() => openModal(data._id)}
            >
              Xóa
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}

export default LessonItem;
