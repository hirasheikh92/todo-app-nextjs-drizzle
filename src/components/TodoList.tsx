import BASE_PATH_FORAPI from "@/config/basePathUrl";
import { Todo } from "@/lib/drizzle";
import React from "react";

const getData = async () => {
  try {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/todo`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const TodoList = async () => {
  const data: Todo[] = await getData();
  console.log(data);

  return (
    <>
      {data.map((item) => {
        <div className='bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5'>
          {/* Circle */}
          <div className='h-3 w-3 bg-secondary rounded-full'></div>
          {/* Task Title */}
          <p className='text-lg font-medium'>{item.task}</p>
        </div>;
      })}
    </>
  );
};

export default TodoList;
