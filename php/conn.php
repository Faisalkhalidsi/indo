<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$server = "localhost";
$username = "root";
$password = "root";
$database = "db_peta";
$con = mysql_connect($server, $username, $password) or die("Could not connect: " . mysql_error());
mysql_query('SET CHARACTER SET utf8');
mysql_select_db($database, $con);
?>

