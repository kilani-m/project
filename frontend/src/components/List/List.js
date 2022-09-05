import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLCourses } from "../../JS/actions/coursesActions";
import Cards from "./Cards";

const List = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getALLCourses());
  }, []);
  const courses = useSelector((state) => state.coursesReducer.courses);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: "20px",
      }}
    >
      {courses.map((el) => (
        <Cards el={el} key={el._id} />
      ))}
    </div>
  );
};

export default List;
