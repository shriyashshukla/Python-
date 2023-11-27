<!DOCTYPE html>
<html>
<head>
  <title>DBMS Connection Test</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "root";
// Create connection
try {
  $conn = new PDO("mysql:host=$servername", $username, $password);
 // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Created Connection successfully!!!";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
$conn = null; //Close Connection
?>
</body>
</html>




