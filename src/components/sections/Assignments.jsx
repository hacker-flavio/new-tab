import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Assignments.css";

function Assignments() {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:4000/courses", {
      withCredentials: true, // This instructs Axios to include cookies in the request
    });
    console.log(response.data.courses);
    setCourses(response.data.courses);
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="outerCourseContainer">
      <div className="containerTitle">Pending Canvas Assignments</div>
      <div className="courseContainer">
        {courses.map((myClass) => {
          return (
            <div className="courseDiv">
              <div className="courseTitle">{myClass.name}</div>
              <div style={{ marginLeft: "20px" }}>
                {myClass.assignments.map((assignment) => {
                  return (
                    <div className="assignmentDiv">
                      <div className="assignmentTitle">
                        <div>{assignment.name}</div>
                        <div style={{ marginLeft: "20px" }}>
                          {assignment.submissions.map((task) => {
                            return (
                              <div className="submissionDiv">
                                <div className="submissionURL">
                                  url:{" "}
                                  <a href={task.html_url} target="_blank">
                                    {task.html_url}
                                  </a>
                                </div>
                                <div className="submissionDueDate">
                                  due date: {task.due_at}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Assignments;
