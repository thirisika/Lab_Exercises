function displayJson(){
    const container = document.getElementById('card-container');
    //const postLimitInput = document.getElementById('postLimit');
    //const loadPostsButton = document.getElementById('loadPosts');

    // Function to fetch and display posts
    async function fetchAndDisplayPosts() {
        container.innerHTML = ''; // Clear previous posts
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const posts = await response.json();

            posts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'col-lg-3 col-md-6 col-12';

                // jo: ideally use a template instead to keep HTML and JS separate, but this does work well
                card.innerHTML = `
                    <div class="card" style="width: 16rem; height: 17rem">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            container.innerHTML = '<p class="text-danger">Failed to load posts. Please try again later.</p>';
        }
    }

    // Load default posts on page load
    fetchAndDisplayPosts();
}
document.addEventListener('DOMContentLoaded',displayJson);
    // Reload posts when button is clicked
//     loadPostsButton.addEventListener('click', () => {
//         const limit = parseInt(postLimitInput.value, 10) || 10;
//         fetchAndDisplayPosts(limit);
//     });

