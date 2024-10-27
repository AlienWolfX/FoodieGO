import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { MdOutlineUnarchive } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
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
  path: "/favorite-recipes",
  icon: GrFavorite,
  label: "Favorites",
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
