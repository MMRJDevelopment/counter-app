import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slice/sliceCount";

const Counts = () => {
  const demo = useSelector((state) => state.counter.value);
  console.log(demo);

  const dispatch = useDispatch();
  const [number, setNumber] = useState(" ");

  const handleNumber = (e) => {
    setNumber(e.target.value);
    console.log(e.target.value);
    // setFullNameerror(' ')
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-500 cyan-500 to-blue-500 ... flex justify-center items-center">
      <div className="bg-white w-1/2 rounded-lg p-5">
        <h1 className="text-center font-sans text-[60px] ">COUNT = {demo}</h1>
        <div className="flex justify-center mt-4 items-center gap-10">
          <div>
            <p>Count Number</p>
            <input
              onChange={handleNumber}
              value={number}
              className="w-56 border rounded-lg border-[b8bacf] outline-none py-[10px] px-[16px]"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <p>Increment or Decrement, Number</p>
            <input
              className="w-64 border rounded-lg  border-[b8bacf] outline-none py-[10px] px-[16px]"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div>
            <button
              onClick={() => dispatch(increment())}
              className=" font-nun bg-gradient-to-r from-indigo-500 cyan-500 to-blue-500 font-semobol text-white bg-primarycolor p-[20px] rounded-lg  mt-[50px]"
            >
              Increment
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(decrement())}
              className=" font-nun bg-gradient-to-r from-indigo-500 cyan-500 to-blue-500 font-semobol text-white bg-primarycolor p-[20px] rounded-lg  mt-[50px]"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
