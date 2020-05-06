import React from "react";

function SideBar({
  settingsComponent,
  notificationComponent,
  taskComponent1,
  taskComponent2,
  profileExpand,
  profileExpanded,
  taskExpand,
  taskExpanded,
}) {
  return (
    <div className="sideBarDiv">
      <button className="button" onClick={profileExpand}>
        {" "}
        Profile
      </button>
      <button
        className={profileExpanded ? "subButton" : "profileSubButton"}
        onClick={settingsComponent}
      >
        {" "}
        Setting
      </button>
      <button
        className={profileExpanded ? "subButton" : "profileSubButton"}
        onClick={notificationComponent}
      >
        {" "}
        Notification
      </button>
      <button className="button" onClick={taskExpand}>
        {" "}
        My tasks
      </button>
      <button
        className={taskExpanded ? "subButton" : "profileSubButton"}
        onClick={taskComponent1}
      >
        {" "}
        Task1
      </button>
      <button
        className={taskExpanded ? "subButton" : "profileSubButton"}
        onClick={taskComponent2}
      >
        {" "}
        Task2
      </button>
    </div>
  );
}

export default SideBar;
