import { motion } from "framer-motion";
import { OverviewCards } from "../../../components/AnalyticsComponents/OverviewCards";
import { Layout } from "../Layout";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";
import Grid from "@mui/material/Grid";
import { Card, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GetAppIcon from "@mui/icons-material/GetApp";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const Analytics = () => {
 // Sample data - replace with real data
 const statsData = {
  followers: 1234,
  likes: 5678,
  downloads: 910,
  recipes: 23,
 };

 const monthlyData = [
  { month: "Jan", followers: 100, likes: 150 },
  { month: "Feb", followers: 200, likes: 300 },
  { month: "Mar", followers: 300, likes: 450 },
  { month: "Apr", followers: 400, likes: 600 },
  { month: "May", followers: 500, likes: 750 },
 ];

 const recipeCategories = [
  { id: 0, value: 35, label: "Main Course" },
  { id: 1, value: 25, label: "Desserts" },
  { id: 2, value: 20, label: "Appetizers" },
  { id: 3, value: 15, label: "Beverages" },
  { id: 4, value: 5, label: "Others" },
 ];

 return (
  <Layout>
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
   >
    <div className="flex items-center justify-between">
     <Typography className="text-lg text-gray-700 font-medium">
      Analytics Dashboard
     </Typography>
     <Typography className="text-sm text-gray-500">
      Last updated: {new Date().toLocaleDateString()}
     </Typography>
    </div>
    <hr className="border-gray-100" />

    {/* Stats Cards */}
    <Grid container spacing={3}>
     {[
      {
       title: "Total Followers",
       value: statsData.followers.toLocaleString(),
       icon: <PersonIcon />,
       color: "#3b82f6",
       bgColor: "#EFF6FF",
       trend: "+12.5%",
      },
      {
       title: "Total Likes",
       value: statsData.likes.toLocaleString(),
       icon: <FavoriteIcon />,
       color: "#ef4444",
       bgColor: "#FEF2F2",
       trend: "+8.2%",
      },
      {
       title: "Total Downloads",
       value: statsData.downloads.toLocaleString(),
       icon: <GetAppIcon />,
       color: "#10b981",
       bgColor: "#ECFDF5",
       trend: "+15.3%",
      },
      {
       title: "Total Recipes",
       value: statsData.recipes.toLocaleString(),
       icon: <RestaurantIcon />,
       color: "#f59e0b",
       bgColor: "#FFFBEB",
       trend: "+5.8%",
      },
     ].map((stat, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
       >
        <Card 
         elevation={0}
         className="p-5 border border-gray-100 hover:border-gray-200 transition-all duration-300"
         sx={{ borderRadius: 3 }}
        >
         <Box display="flex" alignItems="center" justifyContent="space-between">
          <div className="space-y-2">
           <Typography color="textSecondary" variant="subtitle2" className="text-gray-500">
            {stat.title}
           </Typography>
           <div className="space-y-1">
            <Typography variant="h4" style={{ color: stat.color }} className="font-semibold">
             {stat.value}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
             <span className="text-green-500">{stat.trend}</span> vs last month
            </Typography>
           </div>
          </div>
          <Box 
           className="rounded-xl p-3"
           sx={{ 
            backgroundColor: stat.bgColor,
            color: stat.color,
           }}
          >
           {stat.icon}
          </Box>
         </Box>
        </Card>
       </motion.div>
      </Grid>
     ))}
    </Grid>

    {/* Charts Section */}
    <Grid container spacing={3}>
     {/* Growth Chart */}
     <Grid item xs={12} md={8}>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.4 }}
      >
       <Card 
        elevation={0}
        className="p-6 border border-gray-100"
        sx={{ borderRadius: 3 }}
       >
        <div className="flex items-center justify-between mb-6">
         <Typography variant="h6" className="text-gray-700 font-medium">
          Growth Overview
         </Typography>
         <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
          <option>Last 6 months</option>
          <option>Last year</option>
         </select>
        </div>
        <LineChart
         xAxis={[
          {
           data: monthlyData.map((item) => item.month),
           scaleType: "point",
           tickLabelStyle: { fontSize: 11 },
          },
         ]}
         yAxis={[
          {
           tickLabelStyle: { fontSize: 11 },
          },
         ]}
         series={[
          {
           data: monthlyData.map((item) => item.followers),
           label: "Followers",
           color: "#3b82f6",
           curve: "linear",
           showMark: true,
          },
          {
           data: monthlyData.map((item) => item.likes),
           label: "Likes",
           color: "#ef4444",
           curve: "linear",
           showMark: true,
          },
         ]}
         height={300}
         margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
         sx={{
          '.MuiChartsLegend-root': {
           fontSize: 11,
           gap: '8px',
          },
          '.MuiLineElement-root': {
           strokeWidth: 2,
          },
          '.MuiMarkElement-root': {
           stroke: 'white',
           strokeWidth: 2,
           fill: 'currentColor',
          },
         }}
        />
       </Card>
      </motion.div>
     </Grid>

     {/* Recipe Categories */}
     <Grid item xs={12} md={4}>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.5 }}
      >
       <Card 
        elevation={0}
        className="p-6 border border-gray-100"
        sx={{ borderRadius: 3 }}
       >
        <div className="flex items-center justify-between mb-6">
         <Typography variant="h6" className="text-gray-700 font-medium">
          Recipe Categories
         </Typography>
         <button className="text-sm text-blue-500 hover:text-blue-600">
          View All
         </button>
        </div>
        <PieChart
         series={[
          {
           data: recipeCategories,
           highlightScope: { faded: "global", highlighted: "item" },
           faded: { innerRadius: 20, additionalRadius: -20 },
           innerRadius: 20,
           paddingAngle: 2,
           cornerRadius: 4,
           outerRadius: 80,
           labels: { style: { fontSize: 11 } },
          },
         ]}
         height={300}
         width={300}
         margin={{ left: 120, right: 20, top: 20, bottom: 20 }}
         slotProps={{
          legend: {
           direction: "row",
           position: { vertical: "bottom", horizontal: "middle" },
           padding: 0,
           itemMarkWidth: 10,
           itemMarkHeight: 10,
           markGap: 5,
           itemGap: 8,
           labelStyle: {
            fontSize: 11,
            fill: "gray",
           },
          },
         }}
         sx={{
          '.MuiChartsLegend-root': {
           fontSize: 11,
           gap: '8px',
          },
         }}
        />
       </Card>
      </motion.div>
     </Grid>

     {/* Popular Recipes */}
     <Grid item xs={12}>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.6 }}
      >
       <Card 
        elevation={0}
        className="p-6 border border-gray-100"
        sx={{ borderRadius: 3 }}
       >
        <div className="flex items-center justify-between mb-6">
         <Typography variant="h6" className="text-gray-700 font-medium">
          Most Popular Recipes
         </Typography>
         <div className="flex items-center gap-2">
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
           <option>This Month</option>
           <option>Last Month</option>
          </select>
         </div>
        </div>
        <BarChart
         xAxis={[
          {
           scaleType: "band",
           data: ["Recipe 1", "Recipe 2", "Recipe 3", "Recipe 4", "Recipe 5"],
           gap: 0.2,
          },
         ]}
         series={[
          {
           data: [300, 250, 200, 150, 100],
           color: "#3b82f6",
           radius: 4,
          },
         ]}
         height={300}
         margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
         sx={{
          '.MuiBarElement-root': {
           borderRadius: '6px',
          },
         }}
        />
       </Card>
      </motion.div>
     </Grid>
    </Grid>
   </motion.div>
  </Layout>
 );
};
