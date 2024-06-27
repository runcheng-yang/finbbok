document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const bookData = {};
    formData.forEach((value, key) => {
        bookData[key] = value;
    });

    fetch('addbook.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('书籍添加成功');
              this.reset();
          } else {
              alert('书籍添加失败');
          }
      });
});
