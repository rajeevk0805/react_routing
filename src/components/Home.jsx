import React from "react";

const Home = () => {
  const liveClasses = [
    {
      title: "Front-End Technologies",
      mentor: "Gamana",
      classTime: "9:00 AM - 10:30 AM",
      progress: "97%",
      status: "Live",
    },
    {
      title: "Java",
      mentor: "Sharana Basappa",
      classTime: "2:00 PM - 4:00 PM",
      progress: "81%",
      status: "Upcoming",
    },
    {
      title: "Manual Testing",
      mentor: "Sandesh",
      classTime: "6:15 PM - 7:30 PM",
      progress: "95%",
      status: "Upcoming",
    },
    {
      title: "Python",
      mentor: "Gamana",
      classTime: "4:15 PM - 5:45 PM",
      progress: "80%",
      status: "Upcoming",
    },
  ];

  const self_paced=[
    {
      title: "SQL",
      mentor: "Kodnest",
      courseType: "Self-Paced",
      progress: "100%",
      status: "Self-Paced",
    }
  ]
  return (
    <div className="px-20 my-20">
      <div className="flex flex-col">
       <div className=" my-4">
         <h1 className="font-bold">Live Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveClasses.map((item, index) => (
            <div
              className="card border-2 flex flex-col border-gray-300 rounded-lg  mt-2 bg-white hover:shadow-lg  cursor-pointer hover:scale-101 transform transition-transform duration-300"
              key={index}
            >
             <div
               className="h-1.5 w-full rounded-t-xl"
               style={{ backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}` }}
             ></div>
             <div className="p-4">
               <div className="flex items-center gap-4 justify-between">
                <div className="">
                  <h2 className="font-bold text-md line-clamp-1">{item.title}</h2>
                  <p className="text-gray-600 text-sm font-semibold line-clamp-1">
                    Mentor: {item.mentor}
                  </p>
                </div>
                <div
                  className={`px-2 py-1 rounded font-semibold ${item.status === "Live" ? "bg-green-200 text-green-500" : "bg-blue-300 text-blue-500"}`}
                >
                  {item.status}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between items-center  text-gray-600 text-sm font-semibold">
                  <p className="">Progress </p>
                  <p>{item.progress}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
                <div className="flex justify-between items-center  text-gray-600 text-sm font-normal">
                  <p className="">Class Time: </p>
                  <p>{item.classTime}</p>
                </div>
              </div>
              <div className="flex  items-center mt-4 bg-gray-100 text-gray-800  py-2 px-4 rounded cursor-pointer justify-center font-semibold">
                Join Class
              </div>
             </div>
            </div>
          ))}

        </div>
       </div>

{/* Self-Paced Courses */}

       <div className=" my-4">
         <h1 className="font-bold">Self-Paced Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {self_paced.map((item, index) => (
            <div
              className="card border-2 flex flex-col border-gray-300 rounded-lg  mt-2 bg-white hover:shadow-lg  cursor-pointer hover:scale-101 transform transition-transform duration-300"
              key={index}
            >
               <div
               className="h-1.5 w-full rounded-t-xl"
               style={{ backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}` }}
             ></div>
              <div className="p-4">
                <div className="flex items-center gap-4 justify-between">
                <div className="">
                  <h2 className="font-bold text-md line-clamp-1">{item.title}</h2>
                  <p className="text-gray-600 text-sm font-semibold line-clamp-1">
                    Mentor: {item.mentor}
                  </p>
                </div>
                <div
                  className={`px-2 py-1 rounded font-semibold ${item.status === "Live" ? "bg-green-200 text-green-500" : "bg-blue-300 text-blue-500"}`}
                >
                  {item.status}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between items-center  text-gray-600 text-sm font-semibold">
                  <p className="">Progress </p>
                  <p>{item.progress}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
                <div className="flex justify-between items-center  text-gray-600 text-sm font-normal">
                  <p className="">Class Type: </p>
                  <p>{item.courseType}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 bg-gray-100 text-gray-800  py-2 px-4 rounded cursor-pointer  font-semibold">
                <p>View Syllabus</p>
                <p>Continue</p>
              </div>
              </div>
            </div>
          ))}

        </div>
       </div>
      </div>
    </div>
  );
};

export default Home;
