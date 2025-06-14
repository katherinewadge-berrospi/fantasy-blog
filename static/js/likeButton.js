function toggleLike(currentlyLiked, currentCount) {
  if (currentlyLiked) {
    return { liked: false, count: currentCount - 1 };
  } else {
    return { liked: true,  count: currentCount + 1 };
  }
}

module.exports = { toggleLike };