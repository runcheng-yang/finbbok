document.addEventListener('DOMContentLoaded', () => {
    const isIndexPage = document.getElementById('book-grid') !== null;

    if (isIndexPage) {
        fetch('data.php')
            .then(response => response.json())
            .then(data => {
                const bookGrid = document.getElementById('book-grid');
                data.slice(1).forEach(book => {
                    const bookItem = document.createElement('div');
                    bookItem.classList.add('book-item');
                    bookItem.innerHTML = `
                        <a href="book.php?id=${book[0]}">
                            <img src="${book[5]}" alt="${book[1]}">
                            <h2>${book[1]}</h2>
                        </a>
                    `;
                    bookGrid.appendChild(bookItem);
                });
            });
    }
});

function showCopyrightNotice(event) {
    event.preventDefault();
    alert('本站发布的所有资源均来自于互联网，仅限用于个人学习和研究目的，请在下载后24小时内删除，不得用于任何商业用途，否则后果自负，请支持购买正版图书！如侵犯到您的权益，请及时通知我们，我们会及时处理。');
}
