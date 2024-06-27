<?php
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'])) {
    $id = $data['id'];
    $csvFile = file('books.csv');
    $newData = [];

    foreach ($csvFile as $line) {
        $row = str_getcsv($line);
        if ($row[0] != $id) {
            $newData[] = $row;
        }
    }

    $file = fopen('books.csv', 'w');
    foreach ($newData as $line) {
        fputcsv($file, $line);
    }
    fclose($file);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
