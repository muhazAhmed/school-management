import { announcementsData } from "@/lib/announcementData";

const Announcements = () => {
  return (
    <div className="bg-[#333333] p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-300 cursor-pointer hover:text-white">
          View All
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcementsData.map((announcement) => (
          <div
            key={announcement.id}
            className={`${announcement.bgColor} rounded-md p-4`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-black">{announcement.title}</h2>
              <span className="text-xs text-black bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
