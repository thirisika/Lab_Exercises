const axios = require('axios');

exports.updateCountry = async (req, res) => {
  try {
    const id = req.params.id;

    // Fetch all countries from the sample API
    const response = await axios.get('https://api.sampleapis.com/countries/countries');
    const countries = response.data;

    // Find the country with the matching id (assuming each country has an "id" property)
    const country = countries.find(c => String(c.id) === id);
    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    // Simulate an update by merging the existing country with the request body data
    const updatedCountry = { ...country, ...req.body };

    // Note: Since this is a third-party read-only API, we do not actually update the data on the remote server.
    res.json({ message: 'Country updated successfully (simulation)', data: updatedCountry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating country data' });
  }
};
