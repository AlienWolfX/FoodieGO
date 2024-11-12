import { motion } from "framer-motion";
import { Layout } from "../Layout";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";
import Grid from "@mui/material/Grid";
import { Card, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GetAppIcon from "@mui/icons-material/GetApp";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState, useEffect, useRef } from "react";
import { UserRecipeData } from "../../../../data/UserRecipeData";

export const Analytics = () => {
 // Calculate total stats from UserRecipeData
 const statsData = {
  followers: 1234, // Keep this static as it's user-specific
  likes: UserRecipeData.reduce((sum, recipe) => sum + recipe.likes, 0),
  downloads: UserRecipeData.reduce((sum, recipe) => sum + recipe.downloads, 0),
  recipes: UserRecipeData.length,
 };

 // Line Chart Data - Calculate monthly trends
 const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul'];
 const viewsData = [
  UserRecipeData.slice(0, 3).reduce((sum, recipe) => sum + recipe.views, 0),
  UserRecipeData.slice(3, 6).reduce((sum, recipe) => sum + recipe.views, 0),
  UserRecipeData.slice(6, 9).reduce((sum, recipe) => sum + recipe.views, 0),
  UserRecipeData.slice(9, 12).reduce((sum, recipe) => sum + recipe.views, 0),
  UserRecipeData.slice(12).reduce((sum, recipe) => sum + recipe.views, 0),
 ];
 const likesData = [
  UserRecipeData.slice(0, 3).reduce((sum, recipe) => sum + recipe.likes, 0),
  UserRecipeData.slice(3, 6).reduce((sum, recipe) => sum + recipe.likes, 0),
  UserRecipeData.slice(6, 9).reduce((sum, recipe) => sum + recipe.likes, 0),
  UserRecipeData.slice(9, 12).reduce((sum, recipe) => sum + recipe.likes, 0),
  UserRecipeData.slice(12).reduce((sum, recipe) => sum + recipe.likes, 0),
 ];

 // Bar Chart Data - Top 5 recipes by views
 const topRecipes = [...UserRecipeData]
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);
 const recipeNames = topRecipes.map(recipe => recipe.title);
 const recipeViews = topRecipes.map(recipe => recipe.views);

 // Recipe Categories data - Calculate from UserRecipeData
 const categoryCount = UserRecipeData.reduce((acc, recipe) => {
  acc[recipe.category] = (acc[recipe.category] || 0) + 1;
  return acc;
 }, {});

 const recipeCategories = Object.entries(categoryCount)
  .map(([label, value], id) => ({
   id,
   label,
   value: (value / UserRecipeData.length) * 100,
  }));

 // Cuisine distribution data - Calculate from UserRecipeData
 const cuisineCount = UserRecipeData.reduce((acc, recipe) => {
  acc[recipe.cuisine] = (acc[recipe.cuisine] || 0) + 1;
  return acc;
 }, {});

 const cuisineDistribution = Object.entries(cuisineCount)
  .map(([label, value], id) => ({
   id,
   label,
   value: (value / UserRecipeData.length) * 100,
  }));

 // Add responsive width calculation
 const useChartWidth = (containerRef) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
   const updateWidth = () => {
    if (containerRef.current) {
     setWidth(containerRef.current.offsetWidth);
    }
   };

   updateWidth();
   window.addEventListener('resize', updateWidth);
   return () => window.removeEventListener('resize', updateWidth);
  }, [containerRef]);

  return width;
 };

 // Create refs for chart containers
 const lineChartRef = useRef(null);
 const pieChart1Ref = useRef(null);
 const pieChart2Ref = useRef(null);
 const barChartRef = useRef(null);

 // Get responsive widths
 const lineChartWidth = useChartWidth(lineChartRef);
 const pieChart1Width = useChartWidth(pieChart1Ref);
 const pieChart2Width = useChartWidth(pieChart2Ref);
 const barChartWidth = useChartWidth(barChartRef);

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

    {/* Charts Grid */}
    <Grid container spacing={3}>
     {/* Line Chart */}
     <Grid item xs={12} lg={8}>
      <Card 
       elevation={0}
       className="p-6 border border-gray-100"
       sx={{ borderRadius: 3 }}
      >
       <Typography variant="h6" className="mb-4">Growth Trends</Typography>
       <div ref={lineChartRef} className="w-full">
        <LineChart
         width={lineChartWidth - 48 || 500}
         height={300}
         series={[
          {
           data: viewsData,
           label: 'Views',
           color: '#3b82f6',
          },
          {
           data: likesData,
           label: 'Likes',
           color: '#ef4444',
          },
         ]}
         xAxis={[{
          data: months,
          scaleType: 'point',
         }]}
         sx={{
          '.MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
           fontSize: '0.875rem',
          },
          '.MuiChartsLegend-root': {
           fontSize: '0.875rem',
          },
         }}
        />
       </div>
      </Card>
     </Grid>

     {/* Recipe Categories Pie Chart */}
     <Grid item xs={12} lg={4}>
      <Card 
       elevation={0}
       className="p-6 h-full border border-gray-100"
       sx={{ borderRadius: 3 }}
      >
       <Typography variant="h6" className="mb-4">Recipe Categories</Typography>
       <div ref={pieChart1Ref} className="w-full">
        <PieChart
         series={[{
          data: recipeCategories,
          highlightScope: { faded: 'global', highlighted: 'item' },
          innerRadius: 30,
          paddingAngle: 2,
          cornerRadius: 4,
         }]}
         height={300}
         width={pieChart1Width || 400}
         slotProps={{
          legend: {
           direction: 'column',
           position: { vertical: 'middle', horizontal: 'right' },
           padding: 0,
           itemMarkWidth: 10,
           itemMarkHeight: 10,
           markGap: 5,
           itemGap: 8,
          },
         }}
        />
       </div>
      </Card>
     </Grid>

     {/* Cuisine Distribution Pie Chart */}
     <Grid item xs={12} lg={4}>
      <Card 
       elevation={0}
       className="p-6 h-full border border-gray-100"
       sx={{ borderRadius: 3 }}
      >
       <Typography variant="h6" className="mb-4">Cuisine Distribution</Typography>
       <div ref={pieChart2Ref} className="w-full flex justify-center">
        <PieChart
         series={[{
          data: cuisineDistribution,
          highlightScope: { faded: 'global', highlighted: 'item' },
          innerRadius: 30,
          paddingAngle: 2,
          cornerRadius: 4,
         }]}
         height={300}
         width={Math.min(pieChart2Width || 400, 400)}
         slotProps={{
          legend: {
           direction: 'column',
           position: { vertical: 'middle', horizontal: 'right' },
           padding: 0,
           itemMarkWidth: 10,
           itemMarkHeight: 10,
           markGap: 5,
           itemGap: 8,
          },
         }}
        />
       </div>
      </Card>
     </Grid>

     {/* Bar Chart - Now full width like Growth Trends */}
     <Grid item xs={12} lg={8}>
      <Card 
       elevation={0}
       className="p-6 h-full border border-gray-100"
       sx={{ borderRadius: 3 }}
      >
       <Typography variant="h6" className="mb-4">Popular Recipes</Typography>
       <div ref={barChartRef} className="w-full">
        <BarChart
         width={barChartWidth - 48 || 500}
         height={300}
         series={[{
          data: recipeViews,
          label: 'Views',
          color: '#3b82f6',
          valueFormatter: (value) => `${value} views`,
         }]}
         xAxis={[{
          data: recipeNames,
          scaleType: 'band',
          tickLabelStyle: {
           fontSize: '0.75rem',
           angle: 45,
           textAnchor: 'start',
           dominantBaseline: 'middle',
          },
         }]}
         margin={{ 
          left: 40,
          right: 20,
          top: 10,
          bottom: 50 
         }}
         sx={{
          width: '100%',
          '.MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
           fontSize: '0.75rem',
          },
          '.MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
           fontSize: '0.75rem',
          },
         }}
        />
       </div>
      </Card>
     </Grid>
    </Grid>
   </motion.div>
  </Layout>
 );
};
