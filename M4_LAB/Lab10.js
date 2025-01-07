async function displayJson() {
    const container = document.getElementById('card-container');
    const categorySelect = document.getElementById('categorySelect');
    const searchInput = document.getElementById('searchInput');
    let allProducts = []; // Store all products for search functionality

    // Fetch and populate categories dropdown
    async function fetchCategories() {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const categories = await response.json();
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    // Fetch and display products based on category
    async function fetchAndDisplayPosts(category = 'all') {
        container.innerHTML = ''; // Clear previous posts
        try {
            let apiUrl = 'https://fakestoreapi.com/products';
            if (category !== 'all') {
                apiUrl += `/category/${encodeURIComponent(category)}`;
            }

            const response = await fetch(apiUrl);
            const product = await response.json();

            const products = [...product].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

            if (category === 'all') {
                allProducts = products; // Store all products for search
            }

            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            container.innerHTML = '<p class="text-danger">Failed to load posts. Please try again later.</p>';
        }
    }

    // Function to display products
    function displayProducts(products) {
        container.innerHTML = ''; // Clear current products
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-6 col-12 mb-4';

            card.innerHTML = `
                <div class="card" style="width: 17rem; height: 500px; overflow:hidden">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 100px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-price" style="text-align:center; font-weight:bold">$${product.price}</p>
                        <p class="card-description" >${product.description}</p>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    // Load categories and default products on page load
    await fetchCategories();
    fetchAndDisplayPosts();

    // Filter products based on selected category
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        fetchAndDisplayPosts(selectedCategory);
    });
}

document.addEventListener('DOMContentLoaded', displayJson);