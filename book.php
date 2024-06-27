<?php
$id = $_GET['id'];
$csvFile = file('books.csv');
$data = [];

foreach ($csvFile as $line) {
    $data[] = str_getcsv($line);
}

$book = null;
foreach ($data as $row) {
    if ($row[0] == $id) {
        $book = $row;
        break;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $book[1]; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1><?php echo $book[1]; ?></h1>
    </header>
    <main>
        <div class="book-details">
            <img src="<?php echo $book[5]; ?>" alt="<?php echo $book[1]; ?>">
            <div class="book-info">
                <h2><?php echo $book[1]; ?></h2>
                <p><strong>年份:</strong> <?php echo $book[2]; ?></p>
                <p><strong>推荐语:</strong> <?php echo $book[3]; ?></p>
                <p><strong>ISBN:</strong> <?php echo $book[4]; ?></p>
                <?php if ($book[6]): ?>
                <a href="<?php echo $book[6]; ?>" class="download-button" onclick="showCopyrightNotice(event)">下载</a>
                <?php endif; ?>
                <a href="<?php echo $book[7]; ?>" class="support-button">支持正版</a>
                <p class="copyright-notice">本站发布的所有资源均来自于互联网，仅限用于个人学习和研究目的，请在下载后24小时内删除，不得用于任何商业用途，否则后果自负，请支持购买正版图书！如侵犯到您的权益，请及时通知我们，我们会及时处理。</p>
            </div>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
