import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import React from "react";
const AttendanceChart = React.lazy(
  () => import("@/components/AttendanceChart")
);
const CountChart = React.lazy(() => import("@/components/CountChart"));
const UserCard = React.lazy(() => import("@/components/UserCard"));

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[100%]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[100%]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
