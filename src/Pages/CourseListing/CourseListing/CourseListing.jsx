import { useEffect, useState } from "react";
import axiosPublic from "../../../utils/axiosPublic";


const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosPublic.get("/api/courses").then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">Available Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="p-4 shadow rounded-lg bg-base-100">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="mt-2">{course.description}</p>
            <p className="mt-2 font-semibold">Price: ${course.price}</p>

            <button className="btn btn-primary mt-4">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
