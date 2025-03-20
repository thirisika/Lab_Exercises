const axios = require('axios');

exports.getFakestoreUsers = async (req, res) => {
  try {
    // Read the page number from the query string (default to 1)
    const page = parseInt(req.query.page, 10) || 1;
    const itemsPerPage = 5; // Define how many items per page

    // Fetch all users from the Fake Store API
    const response = await axios.get('https://fakestoreapi.com/users');
    const users = response.data;

    // Simulate pagination
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

    res.json({
      page,
      perPage: itemsPerPage,
      total: users.length,
      data: paginatedUsers
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users from Fake Store API' });
  }
};
