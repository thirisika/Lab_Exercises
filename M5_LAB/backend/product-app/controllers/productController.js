const axios = require('axios');

exports.getCategories = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const category = req.params.category;
        let apiUrl = 'https://fakestoreapi.com/products';
        if (category !== 'all') {
            apiUrl += `/category/${encodeURIComponent(category)}`;
        }
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};
