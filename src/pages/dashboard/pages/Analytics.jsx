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
   >
    <Typography variant="h5" className="text-gray-600 font-medium mb-4">
     Analytics Dashboard
    </Typography>
    <hr className="mb-6" />

    {/* Stats Cards */}
    <Grid container spacing={3} className="mb-6 rounded-md">
     {[
      {
       title: "Total Followers",
       value: statsData.followers,
       icon: <PersonIcon />,
       color: "#3b82f6",
      },
      {
       title: "Total Likes",
       value: statsData.likes,
       icon: <FavoriteIcon />,
       color: "#ef4444",
      },
      {
       title: "Total Downloads",
       value: statsData.downloads,
       icon: <GetAppIcon />,
       color: "#10b981",
      },
      {
       title: "Total Recipes",
       value: statsData.recipes,
       icon: <RestaurantIcon />,
       color: "#f59e0b",
      },
     ].map((stat, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
       >
        <Card className="p-4">
         <Box display="flex" alignItems="center" justifyContent="space-between">
          <div>
           <Typography color="textSecondary" variant="subtitle2">
            {stat.title}
           </Typography>
           <Typography variant="h4" style={{ color: stat.color }}>
            {stat.value}
           </Typography>
          </div>
          <Box style={{ color: stat.color }}>{stat.icon}</Box>
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
       <Card className="p-4">
        <Typography variant="h6" className="mb-4">
         Growth Overview
        </Typography>
        <LineChart
         xAxis={[
          {
           data: monthlyData.map((item) => item.month),
           scaleType: 'point',
           tickLabelStyle: { fontSize: 11 }
          }
         ]}
         yAxis={[
          {
           tickLabelStyle: { fontSize: 11 }
          }
         ]}
         series={[
          {
           data: monthlyData.map((item) => item.followers),
           label: "Followers",
           color: "#3b82f6",
           curve: "linear",
           showMark: true
          },
          {
           data: monthlyData.map((item) => item.likes),
           label: "Likes",
           color: "#ef4444",
           curve: "linear",
           showMark: true
          }
         ]}
         height={300}
         margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
         sx={{
          '.MuiChartsLegend-root': {
           fontSize: 11,
           gap: '8px'
          }
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
       <Card className="p-4">
        <Typography variant="h6" className="mb-4">
         Recipe Categories
        </Typography>
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
           labels: { style: { fontSize: 11 } }
          },
         ]}
         height={300}
         width={300}
         margin={{ left: 120, right: 20, top: 20, bottom: 20 }}
         slotProps={{
          legend: {
           direction: 'row',
           position: { vertical: 'bottom', horizontal: 'middle' },
           padding: 0,
           itemMarkWidth: 10,
           itemMarkHeight: 10,
           markGap: 5,
           itemGap: 8,
           labelStyle: {
            fontSize: 11,
            fill: 'gray'
           }
          }
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
       <Card className="p-4">
        <Typography variant="h6" className="mb-4">
         Most Popular Recipes
        </Typography>
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
        />
       </Card>
      </motion.div>
     </Grid>
    </Grid>
   </motion.div>
  </Layout>
 );
};
