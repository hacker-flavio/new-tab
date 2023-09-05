import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Assignments.css";

function Assignments() {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:4000/courses");
    console.log(response.data.courses);
    setCourses(response.data.courses);
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="outerCourseContainer">
      <div className="containerTitle">Top 20 Course From r/Course</div>
      <div className="courseContainer">
        {courses.map((myClass) => {
          return (
            <div className="courseDiv">
              <div className="courseTitle">{myClass.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Assignments;
