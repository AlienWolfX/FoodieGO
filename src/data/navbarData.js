import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { MdOutlineUnarchive } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export const sidebar = [
 {
  path: "/home",
  icon: MdDashboard,
  label: "Home",
 },
 {
  path: "/my-recipes",
  icon: GrNotes,
  label: "My Recipes",
 },
 {
  path: "/saved-recipes",
  icon: MdOutlineUnarchive,
  label: "Saved",
 },
 {
  path: "/analytics",
  icon: FaRegChartBar,
  label: "Analytics",
 },
 {
  path: "/profile",
  icon: IoPerson,
  label: "My Profile",
 },
];
