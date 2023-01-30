
function endlessScroll(gallery) {
const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
window.scrollBy({
top: cardHeight * 2,
behavior: "smooth",
});
}

export default endlessScroll;

pages/N

<h1>News</h1>
<ul>
  <li>
    <div>
      <div>
        
      </div>
      <h2>Обережно, кліщі! Як уберегти улюбленця</h2>
        <p>Травневі прогулянки з улюбленцем не лише
          приємні, але й потребують пильності. З початком
          теплої пори року активізуються кліщі, і треба бути
          уважним, щоб уберегти свого песика чи котика від
          дуже серйозних неприємностей зі здоров`ям.
        </p>
        <div>
          <p>20/02/2021</p>
          <a href="" target="_blank">Read more</a>
        </div>
    </div>
  </li>
</ul>