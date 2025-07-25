   import React, { useState } from 'react';
   import { TextField, Button, Typography, Container, Box } from '@mui/material';
      const Login = () => {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       const [message, setMessage] = useState('');
   
   const handleSubmit = (event) => {
       event.preventDefault(); // Prevent the default form submission behavior
       // Simple validation
       if (username === 'admin' && password === 'password') {
           setMessage('Login successful!');
       } else {
           setMessage('Invalid username or password.');
       }
   };
      return (
       <Container maxWidth="xs">
           <Box sx={{ mt: 8 }}>
               <Typography variant="h4" component="h1" gutterBottom>
                   Login
               </Typography>
               <form onSubmit={handleSubmit}>
                   <TextField
                       label="Username"
                       variant="outlined"
                       fullWidth
                       margin="normal"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       required
                   />
                   <TextField
                       label="Password"
                       type="password"
                       variant="outlined"
                       fullWidth
                       margin="normal"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                   />
                   <Button type="submit" variant="contained" color="primary" fullWidth>
                       Login
                   </Button>
               </form>
               {message && <Typography color="error" sx={{ mt: 2 }}>{message}</Typography>}
           </Box>
       </Container>
   );
   export default Login;
