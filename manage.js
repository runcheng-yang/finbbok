document.addEventListener('DOMContentLoaded', function() {
    fetch('data.php')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            data.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');
                bookItem.innerHTML = `
                    <h3>${book[1]}</h3>
                    <p><strong>年份:</strong> ${book[2]}</p>
                    <p><strong>推荐语:</strong> ${book[3]}</p>
                    <p><strong>ISBN:</strong> ${book[4]}</p>
                    <button class="delete-button" data-id="${book[0]}">删除</button>
                `;
                bookList.appendChild(bookItem);
            });

            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-id');
                    fetch('deletebook.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ id: bookId })
                    }).then(response => response.json())
                      .then(data => {
                          if (data.success) {
                              alert('书籍删除成功');
                              window.location.reload();
                          } else {
                              alert('书籍删除失败');
                          }
                      });
                });
            });
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('dataphp')
        .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            const bookList = document.getElementById('book-list');
            if (data.length === 0) {
                bookList.innerHTML = '<p>没有书籍</p>';
            } else {
                data.forEach(book => {
                    const bookItem = document.createElement('div');
                    bookItem.classList.add('book-item');
                    bookItem.innerHTML = `
                        <h3>${book[1]}</h3>
                        <p><strong>年份:</strong> ${book[2]}</p>
                        <p><strong>推荐语:</strong> ${book[3]}</p>
                        <p><strong>ISBN:</strong> ${book[4]}</p>
                        <button class="delete-button" data-id="${book[0]}">删除</button>
                    `;
                    bookList.appendChild(bookItem);
                });

                document.querySelectorAll('.delete-button').forEach(button => {
                    button.addEventListener('click', function() {
                        const bookId = this.getAttribute('data-id');
                        fetch('deletebook.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: bookId })
                        }).then(response => response.json())
                          .then(data => {
                              if (data.success) {
                                  alert('书籍删除成功');
                                  window.location.reload();
                              } else {
                                  alert('书籍删除失败');
                              }
                          });
                    });
                });
            }
        })
        .catch(error => console.error('Error:', error));
});
