<?php
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "transactions";
$conn = "";



try {

   $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
} catch (mysqli_sql_exception) {
   //throw $th;
   echo "Could not connect <br>";
}
