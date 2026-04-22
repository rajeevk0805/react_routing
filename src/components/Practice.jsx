import React from "react";

const Practice = () => {
  const advanceAlgorithmTechniques = [
    {
      title: "Advance Algorithm Challenge",
      level: "Intermediate Challenge",
      progress: "80%",
      problems: "15",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
    {
      title: "Advance Algorithm Champion",
      level: "advance Challenge",
      progress: "10%",
      problems: "25",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
    {
      title: "Advance Algorithm Fun",
      level: "beginner Challenge",
      progress: "50%",
      problems: "15",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
  ];

  const sqlTechniques = [
    {
      title: "SQL Connect II: Mastering Basic Joins",
      level: "Intermediate Challenge",
      progress: "80%",
      problems: "27",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
    {
      title: "SQL Connect I: Mastering Basic Joins",
      level: "beginner Challenge",
      progress: "100%",
      problems: "25",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
    {
      title: "SQL Organizer: Subqueries and Sorting",
      level: "advance Challenge",
      progress: "20%",
      problems: "45",
      desc: "Face more complex problems that will test your logic and problem-solving abilities!",
    },
  ]

  return (
    <div className="px-20 my-20 flex flex-col gap-4">
      {/* Advance Algorithm Techniques */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-md mt-2">Advance Algorithm Techniques</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advanceAlgorithmTechniques.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-md border-2 border-gray-100 shadow-md hover:shadow-lg cursor-pointer hover:scale-101 transform transition-transform duration-300"
            >
              <div
                className={`flex justify-between items-center rounded-t-md ${item.level === "Intermediate Challenge" ? "bg-blue-100" : item.level === "advance Challenge" ? "bg-purple-100" : "bg-green-100"} font-semibold text-sm p-2`}
              >
                <div className="flex flex-col gap-1 px-4 ">
                  <h3 className="font-bold text-sm line-clamp-1">
                    {item.title}
                  </h3>
                  <p
                    className={`font-base  text-sm ${item.level === "Intermediate Challenge" ? "text-blue-500" : item.level === "advance Challenge" ? "text-purple-500" : "text-green-500"}`}
                  >
                    {item.level}
                  </p>
                </div>

                <div className="flex flex-col gap-1 px-4 line-clamp-1">
                  <h3 className="font-semibold text-sm">{item.progress}</h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Progress
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 gap-2 text-sm">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-sm font-semibold text-gray-600">
                    Total Problems
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    {item.problems}
                  </p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.desc}
                </p>
                <div className="w-full h-2 bg-gray-300 rounded-full">
                  <span className="block h-full bg-blue-500 rounded-full" style={{ width: item.progress }}></span>
                </div>
              </div>

              <div className="flex border-t border-gray-200 justify-between items-center p-2">
                <button className="px-4 py-1 bg-none text-gray-800 rounded-md text-sm font-semibold border border-gray-400 cursor-pointer">
                  View Problems
                </button>
                <button className="px-4 py-1 bg-black text-white rounded-md text-sm font-semibold cursor-pointer">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SQL */}

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-md mt-2">SQL Power Play: Joins and Agregates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sqlTechniques.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-md border-2 border-gray-100 shadow-md hover:shadow-lg cursor-pointer hover:scale-101 transform transition-transform duration-300"
            >
              <div
                className={`flex justify-between items-center rounded-t-md ${item.level === "Intermediate Challenge" ? "bg-blue-100" : item.level === "advance Challenge" ? "bg-purple-100" : "bg-green-100"} font-semibold text-sm p-2`}
              >
                <div className="flex flex-col gap-1 px-4 ">
                  <h3 className="font-bold text-sm line-clamp-1">
                    {item.title}
                  </h3>
                  <p
                    className={`font-base  text-sm ${item.level === "Intermediate Challenge" ? "text-blue-500" : item.level === "advance Challenge" ? "text-purple-500" : "text-green-500"}`}
                  >
                    {item.level}
                  </p>
                </div>

                <div className="flex flex-col gap-1 px-4 line-clamp-1">
                  <h3 className="font-semibold text-sm">{item.progress}</h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Progress
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 gap-2 text-sm">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-sm font-semibold text-gray-600">
                    Total Problems
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    {item.problems}
                  </p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.desc}
                </p>
                <div className="w-full h-2 bg-gray-300 rounded-full">
                  <span className="block h-full bg-blue-500 rounded-full" style={{ width: item.progress }}></span>
                </div>
              </div>

              <div className="flex border-t border-gray-200 justify-between items-center p-2">
                <button className="px-4 py-1 bg-none text-gray-800 rounded-md text-sm font-semibold border border-gray-400 cursor-pointer">
                  View Problems
                </button>
                <button className="px-4 py-1 bg-black text-white rounded-md text-sm font-semibold cursor-pointer">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
