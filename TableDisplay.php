<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Student Table Display</title>
</head>
<body>
<?php
//echo "<table style="border: solid 3px red ;">";
//echo "<tr><th>Student ID</th><th>Firstname</th><th>Lastname</th><th>Date of Registration</th></tr>";
//<td style='width: 150px; border: 2px solid red;'>" . parent::current(). "</td>";

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = $_POST["dbname"] ;
$table = $_POST["table"] ;
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password) ;
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;
    $stmt = $conn->prepare("SELECT id, firstname, lastname, email, reg_date FROM $table") ;
    $stmt->execute() ;

    // set the resulting array to associative
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo "<table border=yes>";
echo "<tr><th>Student ID</th><th>Firstname</th><th>Lastname</th><th>Email ID</th><th>Date of Registration</th></tr>";
    foreach($result as $t) {
        echo "<tr>"."<td>".$t["id"]."</td>"."<td>".$t["firstname"]."</td>"."<td>".$t["lastname"]."</td>"."<td>".$t["email"]."</td>"."<td>".$t["reg_date"]."</td>"."</tr>" ;
    }
        
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
echo "</table>";
$conn = null;

?>
</body>
</html>

