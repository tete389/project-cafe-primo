import * as React from "react";

import Layout from "../component/Layout/Layout";
import { Box, Toolbar, Grid, Paper, Container, Typography, Link   } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function DashboardPage() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Chart /> */}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {/* <Orders /> */}
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
        <Copyright sx={{ pt: 4 }} />
        <Copyright sx={{ pt: 4 }} />
        <Copyright sx={{ pt: 4 }} />
        <Copyright sx={{ pt: 6 }} />
        <Copyright sx={{ pt: 8 }} />
        <Copyright sx={{ pt: 12 }} />
        <Copyright sx={{ pt: 14 }} />
        <Copyright sx={{ pt: 16 }} />
      </Container>
    </Layout>
  );
}

export default DashboardPage;
