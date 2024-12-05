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

// Scroll the carousel manually
function scrollCarousel(direction) {
  const scrollStep = 315; // Adjust based on image width + gap
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  scrollAmount += direction * scrollStep;

  // Prevent scrolling beyond the limits
  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > maxScroll) scrollAmount = 0; // Loop back to start

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// Auto-scroll the carousel
function autoScrollCarousel() {
  const scrollStep = 315; // Adjust based on image width + gap
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  scrollAmount += scrollStep;

  // Loop back to the start if reaching the end
  if (scrollAmount > maxScroll) {
    scrollAmount = 0;
  }

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// Start auto-scroll
function startAutoScroll() {
  autoScrollInterval = setInterval(autoScrollCarousel, 3000); // Scroll every 3 seconds
}

// Stop auto-scroll
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Add event listeners for hover and interaction
carousel.addEventListener('mouseenter', stopAutoScroll); // Pause on hover
carousel.addEventListener('mouseleave', startAutoScroll); // Resume on mouse leave

document.querySelectorAll('.carousel-button').forEach((button) => {
  button.addEventListener('click', () => {
    stopAutoScroll(); // Stop auto-scroll on button click
    setTimeout(startAutoScroll, 5000); // Resume auto-scroll after 5 seconds
  });
});

// Initialize auto-scroll
startAutoScroll();



// typed js

const typed= new Typed('.multiple-text',{
    strings: ['Movie', 'Moment','Magic'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the "show" class
});


// Carousel Navigation Buttons
const movieCards = document.querySelector('.movie-cards');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

// Scroll left
leftButton.addEventListener('click', () => {
  movieCards.scrollBy({
    left: -300, // Adjust scroll distance
    behavior: 'smooth'
  });
});

// Scroll right
rightButton.addEventListener('click', () => {
  movieCards.scrollBy({
    left: 300, // Adjust scroll distance
    behavior: 'smooth'
  });
});

