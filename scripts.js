// Like/Dislike Functionality
let likeCount = 0;
let dislikeCount = 0;

const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const likeCountDisplay = document.getElementById('like-count');
const dislikeCountDisplay = document.getElementById('dislike-count');

likeButton.addEventListener('click', () => {
  likeCount++;
  likeCountDisplay.textContent = likeCount;
});

dislikeButton.addEventListener('click', () => {
  dislikeCount++;
  dislikeCountDisplay.textContent = dislikeCount;
});

// Comment Section Functionality
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the comment text
  const commentText = commentInput.value;

  // Create a new list item for the comment
  const commentItem = document.createElement('li');
  commentItem.textContent = commentText;

  // Append the new comment to the list
  commentList.appendChild(commentItem);

  // Clear the input field
  commentInput.value = '';
});


const carousel = document.querySelector('.about-images');
let scrollAmount = 0;
let autoScrollInterval;

function scrollCarousel(direction) {
  const scrollStep = 300; // Adjust based on image width + gap
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  scrollAmount += direction * scrollStep;

  // Prevent scrolling beyond the limits
  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

function autoScrollCarousel() {
  const scrollStep = 300; // Adjust based on image width + gap
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  scrollAmount += scrollStep;

  // Loop back to the start if reaching the end
  if (scrollAmount > maxScroll) {
    scrollAmount = 0;
  }

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// Start auto-scroll
autoScrollInterval = setInterval(autoScrollCarousel, 3000); // Scroll every 3 seconds

// Pause auto-scroll on button click
document.querySelectorAll('.carousel-button').forEach((button) => {
  button.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    setTimeout(() => {
      autoScrollInterval = setInterval(autoScrollCarousel, 3000); // Resume after 3 seconds
    }, 5000); // Pause auto-scroll for 5 seconds
  });
});

