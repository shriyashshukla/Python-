<html>
    <head>
      <title>PHP Form Example</title>
   </head>
<body>  

<?php

// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>


<?php
echo "<h2>You have enetered following information:</h2>";
echo "Name: ".$name;
echo "<br>";
echo "Email: ".$email;
echo "<br>";
echo "Website: ".$website;
echo "<br>";
echo "Comment: ".$comment;
echo "<br>";
echo "Gender: ".$gender;
?>

</body>
</html>