<?php

$server = "remotemysql.com";
$user = "jFlK4PtD1p";
$pass = "29ORJWtGzq";
$database = "jFlK4PtD1p";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>
