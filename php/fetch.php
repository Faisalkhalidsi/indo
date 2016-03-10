<?php
include 'conn.php';
$kodeIn = $_POST['kode'];

$sql = "SELECT * FROM penduduk where kode =".$kodeIn."";
$result = mysql_query($sql) or die("Query error: " . mysql_error());

$records = array();

while ($row = mysql_fetch_object($result)) {
    $records[] = $row;
}

mysql_close($con);

$data = "{\"provinsi\" : " . json_encode($records) . "}";
echo $data;
?>