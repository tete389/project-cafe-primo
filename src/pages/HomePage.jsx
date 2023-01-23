import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';





const mdTheme = createTheme();




function HomePage() {
    const [webOpen, setWebOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    

  return (
      
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
            {/* <AppBarComponent isWebOpen={webOpen} isMobileOpen={mobileOpen} toggleWebDrawer={() => setWebOpen(!webOpen)} toggleMobileDrawer={() => setMobileOpen(!mobileOpen)}/>
            <DrawerComponent isWebOpen={webOpen} isMobileOpen={mobileOpen} toggleWebDrawer={() => setWebOpen(!webOpen)} toggleMobileDrawer={() => setMobileOpen(!mobileOpen)} />  */}
        </Box>
      </ThemeProvider>
      
  )
}

export default HomePage