<<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Student Registration</title>
</head>
<body>
<?php
$servername = "localhost" ;
$username = "root" ;
$password = "root" ;
$dbname = "SRMU" ;
$fname = $_POST["fname"] ;
$lname = $_POST["lname"] ;
$email = $_POST["email"] ;

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO student (firstname, lastname, email)
  VALUES ('$fname', '$lname', '$email')";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Student Registered successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}
$conn = null;
?>
</body>
</html>