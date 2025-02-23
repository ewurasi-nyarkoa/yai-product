import { Box, Typography, Container, Button } from "@mui/material";
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}
const HeroSection = ({ title, subtitle, backgroundImage }: HeroSectionProps) => {
  return (
    <Box id='home-section'
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#C08B80", 
        backgroundColor: "#F5E8DD", 
      }}
    >
    
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      
   
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h2" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight={300}>
          {subtitle}
        </Typography>
        <Link href="/#" passHref>
        <Button
  variant="contained"
  sx={{
    marginTop: 3,
    backgroundColor: "#C08B80",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px", 
    fontWeight: "bold",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)", 
    transition: "all 0.3s ease-in-out", 
    "&:hover": {
      backgroundColor: "#8b5e56", 
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.3)", 
    },
  }}
>
  Get Started
</Button>

</Link>
      </Container>
    </Box>
  );
};

export default HeroSection;
