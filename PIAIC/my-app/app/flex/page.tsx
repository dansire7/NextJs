export default function New2() {
  return (
    <div>

      {/*===================================flex row==========================  */}

    <div className="flex bg-gray-300 rounded-full mx-3 my-6 justify-between items-center p-3 flex-wrap gap-4">

      <div className="bg-red-500 rounded-full px-4 py-2 order-1">
        {/* <div className="bg-gray-200 rounded-full w-10 h-10 ">
            0
        </div> */}
        Lorem ipsum
      </div>

      <div className="bg-green-500 rounded-full px-4 py-2 order-3">
        ipsum dolor sit
      </div>

      <div className="bg-orange-500 rounded-full px-4 py-2 order-2">
        amet elit
      </div>

    </div>
      {/*===================================flex row==========================  */}

{/* ============================Flex Column========================================== */}
    <div className="flex bg-gray-300 rounded-full mx-3 my-6 justify-between items-center p-3 flex-wrap flex-col gap-4">

      <div className="bg-red-500 rounded-full px-4 py-2">
        {/* <div className="bg-gray-200 rounded-full w-10 h-10 ">
            0
        </div> */}
        Lorem ipsum
      </div>

      <div className="bg-green-500 rounded-full px-4 py-2">
        ipsum dolor sit
      </div>

      <div className="bg-orange-500 rounded-full px-4 py-2">
        amet elit
      </div>

    </div>
    {/* ===============================Flex Column=============================== */}
    </div>
  );
}
