import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

export const sidebar = [
 {
  path: "/home",
  icon: MdDashboard,
  label: "Home",
 },
 {
  path: "/lor-info",
  icon: MdPeopleAlt,
  label: "Counselor",
 },
 {
  path: "/e-info",
  icon: GiGraduateCap,
  label: "Colleges",
 },
 {
  path: "/profile",
  icon: CgProfile,
  label: "My Profile",
 },
];
