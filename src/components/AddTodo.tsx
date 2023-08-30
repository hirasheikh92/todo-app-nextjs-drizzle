import Image from "next/image";
import React from "react";

const AddTodo = () => {
    return (
        <div>
            <form className='w-full flex gap-x-3'>
                <input
                    // onChange={(e) => setTask({ task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border focus:outline-secondary' type="text" />
                <button type='button'
                    // onClick={handleSubmit}
                    className='p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    <Image src={"/vector.png"} width={20} height={20} alt='vector' />
                </button>
            </form>
        </div>
  );
};

export default AddTodo;
