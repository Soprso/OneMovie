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
