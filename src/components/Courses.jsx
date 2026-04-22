import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const coursesList = [
    {
      tech: "Java",
      status: "In Progress",
      modules: "6 modules",
      topics: "38 Topics",
      mentor: "Sharana Basappa",
      startDate: "Dec 8,2025",
      courseType: "Academic",
      progress: "81",
    },
    {
      tech: "Python",
      status: "In Progress",
      modules: "5 modules",
      topics: "26 Topics",
      mentor: "Gamana",
      startDate: "Feb 22,2026",
      courseType: "Academic",
      progress: "81",
    },
    {
      tech: "Manual Testing",
      status: "In Progress",
      modules: "8 modules",
      topics: "17 Topics",
      mentor: "Sandesh",
      startDate: "Feb 25,2026",
      courseType: "Academic",
      progress: "92",
    },
    {
      tech: "Front-End Technologies",
      status: "In Progress",
      modules: "13 modules",
      topics: "43 Topics",
      mentor: "Gamana",
      startDate: "Jan 5,2026",
      courseType: "Academic",
      progress: "97",
    },
    {
      tech: "SQL",
      status: "Completed",
      modules: "10 modules",
      topics: "51 Topics",
      mentor: "Kodnest",
      startDate: "Dec 29,2025",
      courseType: "Masterclass",
      progress: "100",
    },
  ];

  return (
    <div className="mx-20 flex flex-col gap-4 my-20  ">
      <div className="filter border-b-2 border-gray-300  flex items-center font-semibold text-gray-700 my-2">
        <Link className=" px-4 py-2 rounded-md">In Progress</Link>
        <Link className=" px-4 py-2 rounded-md">Completed</Link>
        <Link className=" px-4 py-2 rounded-md">Upcoming</Link>
      </div>

      {/* Course card */}
      {coursesList.map((course, index) => (
        <div
          key={index}
          className="course-card border border-gray-300 rounded-md p-4 flex  flex-col gap-2 justify-between  shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-center gap-4 w-full">
            <h1 className="font-bold">{course.tech}</h1>
            <p
              className={`px-2 py-1 rounded-md text-sm font-medium ${course.status === "In Progress" ? "bg-yellow-200 text-black" : course.status === "Completed" ? "bg-green-200 text-black" : "bg-blue-200 text-black"}`}
            >
              {course.status}
            </p>
          </div>

          <div className="flex gap-2 text-sm font-semibold">
            <span className="bg-blue-300 text-blue-500 px-2 rounded-sm ">
              {course.modules}
            </span>
            <span className="bg-orange-200 text-orange-500 px-2 rounded-sm ">
              {course.topics}
            </span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="gap-1 flex flex-col">
              <p className="text-sm text-gray-500">Mentor</p>
              <p className="font-medium">{course.mentor}</p>
            </div>
            <div className="gap-1 flex flex-col">
              <p className="text-sm text-gray-500">Start Date</p>
              <p className="font-medium">{course.startDate}</p>
            </div>
            <div className="gap-1 flex flex-col">
              <p className="text-sm text-gray-500">Course Type</p>
              <p className="font-medium">{course.courseType}</p>
            </div>
            <div className="gap-1 flex flex-col ">
              <p className="text-sm text-gray-500">{course.progress}%</p>
              <div className="w-60 bg-gray-300 rounded-full h-2.5 border border-gray-200">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button className="border border-gray-200 p-2 text-sm rounded-md font-bold cursor-pointer hover:transition-transform hover:scale-105">
              View Syllabus
            </button>
            <button className="border border-gray-200 text-white bg-black p-2 text-md rounded-md font-bold cursor-pointer hover:transition-transform hover:scale-105">
              Continue
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-2 items-center">
            <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-3xl">
              +
            </div>
            <h1 className="text-md font-semibold text-gray-800">
              Active Modules
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
