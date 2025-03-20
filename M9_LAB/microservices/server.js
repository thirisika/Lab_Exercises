const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const fakestoreUserRoutes = require('./routes/fakestoreUserRoutes');
const countriesRoutes = require('./routes/countriesRoutes');

// Routes
app.use('/api/fakestore-users', fakestoreUserRoutes);
app.use('/api/countries', countriesRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
