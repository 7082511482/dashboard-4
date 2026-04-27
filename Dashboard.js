import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "12px",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Responsive Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="h6">Users</Typography>
            <Typography variant="h4">1200</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$8,500</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="h6">Orders</Typography>
            <Typography variant="h4">320</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="h6">Products</Typography>
            <Typography variant="h4">85</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} md={8}>
          <Item>
            <Typography variant="h6">Analytics</Typography>
            <Box sx={{ height: 200, backgroundColor: "#f5f5f5", mt: 2 }}>
              Chart Area
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6">Recent Activities</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography>• User registered</Typography>
              <Typography>• Order placed</Typography>
              <Typography>• Payment received</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
