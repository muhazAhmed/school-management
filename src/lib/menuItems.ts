export const menuItems = [
    {
        icon: "fa-solid fa-house",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-graduation-cap",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
    },
    {
        icon: "fa-solid fa-users",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
    },
    {
        icon: "fa-solid fa-people-pulling",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
    },
    {
        icon: "fa-solid fa-list-check",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
    },
    {
        icon: "fa-solid fa-landmark",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
    },
    {
        icon: "fa-solid fa-person-chalkboard",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
    },
    {
        icon: "fa-solid fa-file-lines",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-regular fa-paste",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-square-poll-vertical",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-clipboard-user",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-calendar-days",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-comment",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-bullhorn",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
    },
];

export const navItems = [
    {
        icon: "fa-solid fa-user",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-gear",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "fa-solid fa-power-off",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
    },
];
