<?php
$csvFile = file('books.csv');
$data = [];

foreach ($csvFile as $line) {
    $data[] = str_getcsv($line);
}

echo json_encode($data);
?>
