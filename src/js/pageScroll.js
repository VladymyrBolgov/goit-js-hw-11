function endlessScroll(gallery) {
const { height: cardHeight } =
    document.querySelector(".gallery")
gallery.firstElementChild.getBoundingClientRect();
window.scrollBy({
top: cardHeight * 2,
behavior: "smooth",
});
}

export default endlessScroll;