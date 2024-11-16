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
  borderRadius: '12px',
  border: '1px solid #f1f5f9',
  boxShadow: 'none',
  '.MuiTableCell-root': {
    borderBottom: '1px solid #f1f5f9',
    fontSize: '0.875rem',
    padding: theme.spacing(2),
  },
  '.MuiTableHead-root .MuiTableCell-root': {
    backgroundColor: '#f8fafc',
    fontWeight: 500,
    color: '#475569',
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
      <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        {/* Header Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', md: 'center' },
          gap: 2,
          mb: 4,
        }}>
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: '600', 
                color: '#0f172a',
                mb: 1,
              }}
            >
              Reported Recipes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage and review reported content
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
          }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#94a3b8' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Search>
            <IconButton 
              sx={{ 
                backgroundColor: 'white',
                border: '1px solid #f1f5f9',
                borderRadius: '8px',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': { 
                  backgroundColor: '#f8fafc',
                  borderColor: '#e2e8f0',
                },
              }}
            >
              <FilterListIcon sx={{ color: '#64748b' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Stats Summary */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 2,
          mb: 4,
        }}>
          {[
            { label: 'Total Reports', value: reports.length, color: '#3949ab' },
            { label: 'Pending', value: reports.filter(r => r.status === 'pending').length, color: '#ffa000' },
            { label: 'Approved', value: reports.filter(r => r.status === 'approved').length, color: '#2e7d32' },
            { label: 'Rejected', value: reports.filter(r => r.status === 'rejected').length, color: '#c62828' },
          ].map((stat) => (
            <Box key={stat.label} sx={{
              backgroundColor: 'white',
              p: 3,
              borderRadius: '12px',
              border: '1px solid #f1f5f9',
            }}>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h4" sx={{ color: stat.color, fontWeight: '600', mt: 1 }}>
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Table */}
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
                <TableCell>Reported By</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((report) => (
                  <TableRow 
                    key={report.id} 
                    hover
                    sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          variant="rounded"
                          src={report.recipeImage}
                          sx={{ width: 40, height: 40, borderRadius: 1 }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {report.recipeName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={report.reporterAvatar} sx={{ width: 24, height: 24 }} />
                        <Typography variant="body2">{report.reportedBy}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {report.reason}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {report.category}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={report.severity}
                        size="small"
                        sx={{
                          backgroundColor: getSeverityColor(report.severity).bg,
                          color: getSeverityColor(report.severity).text,
                          textTransform: 'capitalize',
                          fontSize: '0.75rem',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(report.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={report.status}
                        size="small"
                        sx={{
                          backgroundColor: getStatusColor(report.status).bg,
                          color: getStatusColor(report.status).text,
                          textTransform: 'capitalize',
                          fontSize: '0.75rem',
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                        <Tooltip title="View Details">
                          <IconButton 
                            size="small" 
                            onClick={() => handleOpenModal(report)}
                            sx={{ 
                              color: '#64748b',
                              '&:hover': { backgroundColor: '#f1f5f9' }
                            }}
                          >
                            <VisibilityIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Approve">
                          <IconButton 
                            size="small" 
                            sx={{ 
                              color: '#059669',
                              '&:hover': { backgroundColor: '#f0fdf4' }
                            }}
                          >
                            <CheckCircleIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Reject">
                          <IconButton 
                            size="small" 
                            sx={{ 
                              color: '#dc2626',
                              '&:hover': { backgroundColor: '#fef2f2' }
                            }}
                          >
                            <BlockIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={reports.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ 
              borderTop: '1px solid #f1f5f9',
              '.MuiTablePagination-select': { fontSize: '0.875rem' },
              '.MuiTablePagination-displayedRows': { fontSize: '0.875rem' },
            }}
          />
        </StyledTableContainer>
      </Box>

      {/* Report Details Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        {selectedReport && (
          <>
            <DialogTitle sx={{ 
              borderBottom: '1px solid #f1f5f9',
              px: 3,
              py: 2,
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                Report Details
              </Typography>
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Recipe Information */}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Recipe Information
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    p: 2, 
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px'
                  }}>
                    <Avatar
                      variant="rounded"
                      src={selectedReport.recipeImage}
                      sx={{ width: 80, height: 80, borderRadius: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {selectedReport.recipeName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category: {selectedReport.category}
                      </Typography>
                      <Link 
                        to={`/admin/recipes/view-recipe`}
                        state={{ id: selectedReport.recipeId }}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          size="small"
                          sx={{ 
                            mt: 1,
                            textTransform: 'none',
                            fontSize: '0.875rem'
                          }}
                        >
                          View Recipe
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>

                {/* Report Information */}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Report Information
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography variant="body2" color="text.secondary">
                          Reported By
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar 
                          src={selectedReport.reporterAvatar} 
                          sx={{ width: 24, height: 24 }} 
                        />
                        <Typography variant="body2">
                          {selectedReport.reportedBy}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography variant="body2" color="text.secondary">
                          Date Reported
                        </Typography>
                      </Box>
                      <Typography variant="body2">
                        {new Date(selectedReport.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography variant="body2" color="text.secondary">
                          Status
                        </Typography>
                      </Box>
                      <Chip
                        label={selectedReport.status}
                        size="small"
                        sx={{
                          backgroundColor: getStatusColor(selectedReport.status).bg,
                          color: getStatusColor(selectedReport.status).text,
                          textTransform: 'capitalize',
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography variant="body2" color="text.secondary">
                          Severity
                        </Typography>
                      </Box>
                      <Chip
                        label={selectedReport.severity}
                        size="small"
                        sx={{
                          backgroundColor: getSeverityColor(selectedReport.severity).bg,
                          color: getSeverityColor(selectedReport.severity).text,
                          textTransform: 'capitalize',
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ width: 120 }}>
                        <Typography variant="body2" color="text.secondary">
                          Reason
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ flex: 1 }}>
                        {selectedReport.reason}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ 
              borderTop: '1px solid #f1f5f9',
              px: 3,
              py: 2,
            }}>
              <Button 
                onClick={handleCloseModal}
                sx={{ 
                  color: '#64748b',
                  '&:hover': { backgroundColor: '#f1f5f9' }
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ 
                  backgroundColor: '#059669',
                  '&:hover': { backgroundColor: '#047857' }
                }}
              >
                Approve Report
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ 
                  backgroundColor: '#dc2626',
                  '&:hover': { backgroundColor: '#b91c1c' }
                }}
              >
                Reject Report
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Layout>
  );
};
