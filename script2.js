const searchInput = document.getElementById('searchInput');
const imageContainer = document.getElementById('imageContainer');

searchInput.addEventListener('input', handleSearch);

async function handleSearch() {
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm === '') {
    imageContainer.innerHTML = '';
    return;
  }

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=w0tu1GRu2uZJZ27XlfZWXDfQ3BjafgLI`);
    const data = await response.json();
    displayGIFs(data.data);
  } catch (error) {
    console.error('Error fetching GIFs:', error);
  }
}

function displayGIFs(gifs) {
  imageContainer.innerHTML = '';

  gifs.forEach(gifData => {
    const gifElement = document.createElement('img');
    gifElement.src = gifData.images.fixed_height.url;
    gifElement.alt = gifData.title || 'GIF';
    imageContainer.appendChild(gifElement);
  });
}

