const Books = (function () {
  const books = Array.from(
      document.querySelectorAll('#bk-list > li > div.bk-book')
    ),
    booksCount = books.length;

  function init() {
    fetch(
      'https://raw.githubusercontent.com/Qweeqer/3dbookshowcase/main/src/db/books/VelikaIstoriyaYkrajni.txt'
    )
      .then(response => response.text())
      .then(data => {
        const paragraphs = data.split('\n');

        books.forEach(function (book) {
          const other = books.filter(b => b !== book),
            parent = book.parentNode,
            page = book.querySelector('div.bk-page'),
            bookview = parent.querySelector('button.bk-bookview');
          let current = 0;

          // Remove old content
          while (page.firstChild) {
            page.firstChild.remove();
          }

          // Create and fill book content
          const content = paragraphs.map((paragraph, i) => {
            const div = document.createElement('div');
            div.classList.add('bk-content');
            if (i === 0) {
              div.classList.add('bk-content-current');
            }
            div.textContent = paragraph;
            page.appendChild(div);
            return div;
          });

          // Initialize the dataset properties
          book.dataset.opened = 'false';
          book.dataset.flip = 'false';

          parent
            .querySelector('button.bk-bookback')
            .addEventListener('click', function () {
              bookview.classList.remove('bk-active');

              if (book.dataset.flip === 'true') {
                book.dataset.opened = 'false';
                book.dataset.flip = 'false';

                book.classList.remove('bk-viewback');
                book.classList.add('bk-bookdefault');
              } else {
                book.dataset.opened = 'false';
                book.dataset.flip = 'true';

                book.classList.remove('bk-viewinside', 'bk-bookdefault');
                book.classList.add('bk-viewback');
              }
            });

          bookview.addEventListener('click', function () {
            other.forEach(o => {
              o.dataset.opened = 'false';
              o.classList.remove('bk-viewinside');
              o.parentNode.style.zIndex = 0;
              o.parentNode
                .querySelector('button.bk-bookview')
                .classList.remove('bk-active');
              if (!o.classList.contains('bk-viewback')) {
                o.classList.add('bk-bookdefault');
              }
            });

            if (book.dataset.opened === 'true') {
              this.classList.remove('bk-active');
              book.dataset.opened = 'false';
              book.dataset.flip = 'false';

              book.classList.remove('bk-viewinside');
              book.classList.add('bk-bookdefault');
            } else {
              this.classList.add('bk-active');
              book.dataset.opened = 'true';
              book.dataset.flip = 'false';

              book.classList.remove('bk-viewback', 'bk-bookdefault');
              book.classList.add('bk-viewinside');
              parent.style.zIndex = booksCount;
              current = 0;
              content.forEach(c => c.classList.remove('bk-content-current'));
              content[current].classList.add('bk-content-current');
            }
          });

          if (content.length > 1) {
            const navPrev = document.createElement('span'),
              navNext = document.createElement('span'),
              pageInfo = document.createElement('span'); // Создаем новый элемент для информации о страницах

            navPrev.classList.add('bk-page-prev');
            navPrev.innerHTML = '&lt;';
            navNext.classList.add('bk-page-next');
            navNext.innerHTML = '&gt;';

            pageInfo.classList.add('bk-page-info'); // Добавляем класс для нового элемента
            pageInfo.innerHTML = `${current + 1} з ${content.length}`; // Заполняем его начальным контентом

            const nav = document.createElement('nav');
            nav.appendChild(navPrev);
            nav.appendChild(pageInfo); // Добавляем новый элемент в навигацию
            nav.appendChild(navNext);
            page.appendChild(nav);

            // Обновляем информацию о страницах при переключении страниц
            const updatePageInfo = () => {
              pageInfo.innerHTML = `${current + 1} з ${content.length}`;
            };

            navPrev.addEventListener('click', function (e) {
              e.preventDefault();
              if (current > 0) {
                --current;
                content.forEach(c => c.classList.remove('bk-content-current'));
                content[current].classList.add('bk-content-current');
              }
              updatePageInfo(); // Обновляем информацию о страницах
            });

            navNext.addEventListener('click', function (e) {
              e.preventDefault();
              if (current < content.length - 1) {
                ++current;
                content.forEach(c => c.classList.remove('bk-content-current'));
                content[current].classList.add('bk-content-current');
              }
              updatePageInfo(); // Обновляем информацию о страницах
            });
          }
        });
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }

  return {
    init: init,
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  Books.init();
});
