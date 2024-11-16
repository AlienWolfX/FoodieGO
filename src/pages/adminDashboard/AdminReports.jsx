import { Layout } from "../dashboard/Layout";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
  Box,
  TablePagination,
  IconButton,
  Tooltip,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: 'white',
  border: '1px solid #f1f5f9',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  width: '100%',
  maxWidth: '280px',
  transition: 'all 0.2s ease',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: alpha(theme.palette.text.secondary, 0.7),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '0.875rem',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '8px',
  border: 'none',
  boxShadow: 'none',
  backgroundColor: 'white',
  '.MuiTableCell-root': {
    borderBottom: '1px solid #f1f5f9',
    fontSize: '0.813rem',
    padding: theme.spacing(1.5),
  },
  '.MuiTableHead-root .MuiTableCell-root': {
    backgroundColor: 'white',
    fontWeight: 500,
    color: '#64748b',
    borderBottom: '2px solid #f1f5f9',
  },
}));

// Sample data with real recipes from RecipeData
const reports = [
  {
    id: 1,
    recipeName: "Spicy Szechuan Chicken",
    recipeImage: "/foodimages/szechuan-chicken-min.jpg",
    reportedBy: "John Doe",
    reporterAvatar: "https://i.pravatar.cc/150?img=1",
    reason: "Inappropriate content in description",
    date: "2024-03-20T14:30:00",
    status: "pending",
    category: "Dinner",
    severity: "high",
    recipeId: 1
  },
  {
    id: 2,
    recipeName: "Thai Green Curry",
    recipeImage: "/foodimages/thai-green-chicken-curry-min.jpg",
    reportedBy: "Emma Wilson",
    reporterAvatar: "https://i.pravatar.cc/150?img=2",
    reason: "Copyright violation of recipe",
    date: "2024-03-19T09:15:00",
    status: "approved",
    category: "Dinner",
    severity: "medium",
    recipeId: 2
  },
  {
    id: 3,
    recipeName: "Japanese Mochi",
    recipeImage: "/foodimages/japanese-mochi-min.jpg",
    reportedBy: "Michael Brown",
    reporterAvatar: "https://i.pravatar.cc/150?img=3",
    reason: "Misleading instructions",
    date: "2024-03-18T16:45:00",
    status: "rejected",
    category: "Desserts",
    severity: "low",
    recipeId: 16
  },
  {
    id: 4,
    recipeName: "Korean Bibimbap",
    recipeImage: "/foodimages/korean-bibimbap-min.jpg",
    reportedBy: "Sarah Johnson",
    reporterAvatar: "https://i.pravatar.cc/150?img=4",
    reason: "Incorrect ingredients list",
    date: "2024-03-20T11:20:00",
    status: "pending",
    category: "Dinner",
    severity: "medium",
    recipeId: 4
  },
  {
    id: 5,
    recipeName: "Indian Butter Chicken",
    recipeImage: "/foodimages/butter-chicken-min.jpg",
    reportedBy: "David Lee",
    reporterAvatar: "https://i.pravatar.cc/150?img=5",
    reason: "Duplicate recipe content",
    date: "2024-03-17T13:10:00",
    status: "approved",
    category: "Main Dishes",
    severity: "low",
    recipeId: 15
  }
];

const getStatusColor = (status) => {
  const colors = {
    pending: { bg: '#fff8e1', text: '#ffa000' },
    approved: { bg: '#e8f5e9', text: '#2e7d32' },
    rejected: { bg: '#ffebee', text: '#c62828' },
  };
  return colors[status] || colors.pending;
};

const getSeverityColor = (severity) => {
  const colors = {
    high: { bg: '#fff5f5', text: '#e53e3e' },
    medium: { bg: '#fffaf0', text: '#dd6b20' },
    low: { bg: '#f0fff4', text: '#38a169' },
  };
  return colors[severity] || colors.medium;
};

export const AdminReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedReport(null);
  };

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600, mb: 1 }}>
            Report Management
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Review and manage reported content
          </Typography>
        </Box>

        {/* Stats Row */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 4,
        }}>
          {[
            { label: 'Total Reports', value: reports.length, color: '#3b82f6' },
            { label: 'Pending', value: reports.filter(r => r.status === 'pending').length, color: '#f59e0b' },
            { label: 'Approved', value: reports.filter(r => r.status === 'approved').length, color: '#10b981' },
            { label: 'Rejected', value: reports.filter(r => r.status === 'rejected').length, color: '#ef4444' },
          ].map((stat) => (
            <Box key={stat.label} sx={{
              p: 2,
              borderRadius: 1,
              border: '1px solid #f1f5f9',
              backgroundColor: 'white',
            }}>
              <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5 }}>
                {stat.label}
              </Typography>
              <Typography variant="h6" sx={{ color: stat.color, fontWeight: 600 }}>
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Table Section */}
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
                <TableCell>Reporter</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow 
                  key={report.id}
                  sx={{ 
                    '&:hover': { backgroundColor: '#f8fafc' },
                    transition: 'background-color 0.2s'
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        variant="rounded"
                        src={report.recipeImage}
                        sx={{ width: 32, height: 32, borderRadius: 1 }}
                      />
                      <Typography variant="body2">
                        {report.recipeName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar 
                        src={report.reporterAvatar} 
                        sx={{ width: 20, height: 20 }} 
                      />
                      <Typography variant="body2">
                        {report.reportedBy}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {report.reason}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={report.severity}
                      size="small"
                      sx={{
                        height: '20px',
                        backgroundColor: getSeverityColor(report.severity).bg,
                        color: getSeverityColor(report.severity).text,
                        fontSize: '0.75rem',
                        '& .MuiChip-label': { px: 1 }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {new Date(report.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={report.status}
                      size="small"
                      sx={{
                        height: '20px',
                        backgroundColor: getStatusColor(report.status).bg,
                        color: getStatusColor(report.status).text,
                        fontSize: '0.75rem',
                        '& .MuiChip-label': { px: 1 }
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleOpenModal(report)}
                        sx={{ p: 0.5 }}
                      >
                        <VisibilityIcon sx={{ fontSize: 16, color: '#64748b' }} />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ p: 0.5 }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 16, color: '#10b981' }} />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ p: 0.5 }}
                      >
                        <BlockIcon sx={{ fontSize: 16, color: '#ef4444' }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>

      {/* Report Details Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
          }
        }}
      >
        {selectedReport && (
          <>
            <DialogTitle sx={{ 
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #f1f5f9'
            }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#1e293b' }}>
                Report Details
              </Typography>
              <IconButton 
                size="small" 
                onClick={handleCloseModal}
                sx={{ color: '#94a3b8' }}
              >
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Recipe Section */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  p: 2,
                  backgroundColor: '#f8fafc',
                  borderRadius: '6px'
                }}>
                  <Avatar
                    variant="rounded"
                    src={selectedReport.recipeImage}
                    sx={{ width: 48, height: 48, borderRadius: 1 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#1e293b', mb: 0.5 }}>
                      {selectedReport.recipeName}
                    </Typography>
                    <Link 
                      to={`/admin/recipes/view-recipe/${selectedReport.recipeId}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        startIcon={<VisibilityIcon sx={{ fontSize: 16 }} />}
                        size="small"
                        sx={{ 
                          color: '#3b82f6',
                          textTransform: 'none',
                          fontSize: '0.75rem',
                          p: 0,
                          minWidth: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#2563eb'
                          }
                        }}
                      >
                        View Recipe
                      </Button>
                    </Link>
                  </Box>
                </Box>

                {/* Report Info Grid */}
                <Box sx={{ display: 'grid', gap: 2 }}>
                  {/* Reporter */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      src={selectedReport.reporterAvatar} 
                      sx={{ width: 24, height: 24 }} 
                    />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        Reported by
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1e293b' }}>
                        {selectedReport.reportedBy}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 24, 
                      height: 24, 
                      borderRadius: '50%',
                      backgroundColor: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CalendarTodayIcon sx={{ fontSize: 14, color: '#64748b' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        Date reported
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1e293b' }}>
                        {new Date(selectedReport.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Status & Severity */}
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3,
                    p: 2,
                    backgroundColor: '#f8fafc',
                    borderRadius: '6px'
                  }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        Status
                      </Typography>
                      <Chip
                        label={selectedReport.status}
                        size="small"
                        sx={{
                          mt: 0.5,
                          height: '20px',
                          backgroundColor: getStatusColor(selectedReport.status).bg,
                          color: getStatusColor(selectedReport.status).text,
                          fontSize: '0.75rem',
                          '& .MuiChip-label': { px: 1 }
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        Severity
                      </Typography>
                      <Chip
                        label={selectedReport.severity}
                        size="small"
                        sx={{
                          mt: 0.5,
                          height: '20px',
                          backgroundColor: getSeverityColor(selectedReport.severity).bg,
                          color: getSeverityColor(selectedReport.severity).text,
                          fontSize: '0.75rem',
                          '& .MuiChip-label': { px: 1 }
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Reason */}
                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1 }}>
                      Reason for report
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#1e293b',
                        p: 2,
                        backgroundColor: '#f8fafc',
                        borderRadius: '6px',
                        lineHeight: 1.5
                      }}
                    >
                      {selectedReport.reason}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions sx={{ 
              p: 2.5,
              borderTop: '1px solid #f1f5f9',
              gap: 1
            }}>
              <Button
                onClick={handleCloseModal}
                sx={{ 
                  color: '#64748b',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { backgroundColor: '#f1f5f9' }
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ 
                  backgroundColor: '#10b981',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { backgroundColor: '#059669' }
                }}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ 
                  backgroundColor: '#ef4444',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { backgroundColor: '#dc2626' }
                }}
              >
                Reject
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Layout>
  );
};
