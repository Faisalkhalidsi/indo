<?php
include 'conn.php';
$sql = "SELECT * FROM penduduk";
$result = mysql_query($sql) or die("Query error: " . mysql_error());

$records = array();

while ($row = mysql_fetch_assoc($result)) {
    $records[] = $row;
}

mysql_close($con);

$data = "{\"provinsi\" : " . json_encode($records) . "}";
echo $data;
?>
	