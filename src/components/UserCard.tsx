const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-csPurple even:bg-csYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-500">
          05/08/2024
        </span>
        <i className="fa-solid fa-ellipsis cursor-pointer text-black"></i>
      </div>
      <h1 className="text-2xl font-bold my-4 text-black">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-600">{type}</h2>
    </div>
  );
};

export default UserCard;
