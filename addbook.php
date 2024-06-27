<?php
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id']) && isset($data['name']) && isset($data['year']) && isset($data['review']) && isset($data['isbn']) && isset($data['cover'])) {
    $id = $data['id'];
    $name = $data['name'];
    $year = $data['year'];
    $review = $data['review'];
    $isbn = $data['isbn'];
    $cover = $data['cover'];
    $download = isset($data['download']) ? $data['download'] : '';
    $purchase = isset($data['purchase']) ? $data['purchase'] : '';

    $newBook = [$id, $name, $year, $review, $isbn, $cover, $download, $purchase];

    $file = fopen('books.csv', 'a');
    fputcsv($file, $newBook);
    fclose($file);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
