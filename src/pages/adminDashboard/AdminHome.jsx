import { Grid, Paper, Typography, Box, Card } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { styled } from "@mui/material/styles";
import { Layout } from "../dashboard/Layout";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
} from "@mui/x-charts";

const StatsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  border: '1px solid #f1f5f9',
  borderRadius: 12,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#e2e8f0',
  },
}));

const ChartCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  border: '1px solid #f1f5f9',
  borderRadius: 12,
}));

// Sample data structure
const monthlyData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  users: [1200, 1900, 2400, 2800, 3200, 3800],
  recipes: [300, 450, 600, 800, 950, 1100],
};

const recipeCategories = [
  { id: 0, label: 'Main Course', value: 35 },
  { id: 1, label: 'Desserts', value: 25 },
  { id: 2, label: 'Appetizers', value: 20 },
  { id: 3, label: 'Breakfast', value: 20 },
];

const popularRecipes = [
  { name: "Chicken Pasta", views: 1200 },
  { name: "Apple Pie", views: 950 },
  { name: "Beef Stir Fry", views: 850 },
  { name: "Caesar Salad", views: 750 },
  { name: "Chocolate Cake", views: 700 },
];

export const AdminHome = () => {
  // Refs for responsive charts
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  // Hook for responsive chart widths
  const useChartWidth = (ref) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const updateWidth = () => {
        if (ref.current) {
          setWidth(ref.current.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }, [ref]);

    return width;
  };

  const lineChartWidth = useChartWidth(lineChartRef);
  const barChartWidth = useChartWidth(barChartRef);
  const pieChartWidth = useChartWidth(pieChartRef);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 space-y-6"
      >
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#334155' }}>
            Dashboard Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </div>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          {[
            {
              title: "Active Users",
              value: "2,345",
              icon: <PeopleAltIcon />,
              color: "#3b82f6",
              bgColor: "#EFF6FF",
              trend: "+14%",
            },
            {
              title: "Total Recipes",
              value: "1,789",
              icon: <RestaurantIcon />,
              color: "#10b981",
              bgColor: "#ECFDF5",
              trend: "+23",
            },
            {
              title: "Reports",
              value: "892",
              icon: <AssessmentIcon />,
              color: "#ef4444",
              bgColor: "#FEF2F2",
              trend: "+8%",
            },
            {
              title: "Growth",
              value: "67%",
              icon: <TrendingUpIcon />,
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
                <StatsCard elevation={0}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography color="text.secondary" variant="body2">
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" sx={{ my: 1, fontWeight: 600, color: stat.color }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#10b981' }}>
                        {stat.trend} vs last month
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: 2, 
                        backgroundColor: stat.bgColor,
                        color: stat.color 
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>
                </StatsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Charts Grid */}
        <Grid container spacing={3}>
          {/* Growth Trends Chart */}
          <Grid item xs={12} lg={8}>
            <ChartCard elevation={0}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#334155' }}>
                Growth Trends
              </Typography>
              <div ref={lineChartRef}>
                <LineChart
                  width={lineChartWidth || 500}
                  height={300}
                  series={[
                    {
                      data: monthlyData.users,
                      label: 'Users',
                      color: '#3b82f6',
                    },
                    {
                      data: monthlyData.recipes,
                      label: 'Recipes',
                      color: '#10b981',
                    },
                  ]}
                  xAxis={[{
                    data: monthlyData.months,
                    scaleType: 'point',
                  }]}
                />
              </div>
            </ChartCard>
          </Grid>

          {/* Recipe Categories */}
          <Grid item xs={12} lg={4}>
            <ChartCard elevation={0}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#334155' }}>
                Recipe Categories
              </Typography>
              <div ref={pieChartRef}>
                <PieChart
                  series={[{
                    data: recipeCategories,
                    innerRadius: 60,
                    paddingAngle: 2,
                    cornerRadius: 4,
                  }]}
                  height={300}
                  width={pieChartWidth || 400}
                />
              </div>
            </ChartCard>
          </Grid>

          {/* Popular Recipes */}
          <Grid item xs={12}>
            <ChartCard elevation={0}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#334155' }}>
                Popular Recipes
              </Typography>
              <div ref={barChartRef}>
                <BarChart
                  width={barChartWidth || 500}
                  height={300}
                  series={[{
                    data: popularRecipes.map(item => item.views),
                    color: '#3b82f6',
                  }]}
                  xAxis={[{
                    data: popularRecipes.map(item => item.name),
                    scaleType: 'band',
                  }]}
                />
              </div>
            </ChartCard>
          </Grid>
        </Grid>
      </motion.div>
    </Layout>
  );
};
