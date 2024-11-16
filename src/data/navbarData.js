import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { MdOutlineUnarchive } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { FaRegChartBar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdBookmarkBorder } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";

export const sidebar = [
 {
  path: "/home",
  icon: MdOutlineDashboard,
  label: "Home",
 },
 {
  path: "/my-recipes",
  icon: LuClipboardList,
  label: "My Recipes",
 },
 {
  path: "/favorite-recipes",
  icon: MdBookmarkBorder,
  label: "Favorites",
 },
 {
  path: "/leaderboards",
  icon: BsTrophy,
  label: "Leaderboards",
 },

 {
  path: "/analytics",
  icon: IoPieChartOutline,
  label: "Analytics",
 },
 {
  path: "/profile",
  icon: IoPersonOutline,
  label: "My Profile",
 },
];
