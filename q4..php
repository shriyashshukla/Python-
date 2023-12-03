<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize and validate input data
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Initialize variables to store user input
    $username = $password = $email = $phone = $dob = "";

    // Validate username
    if (empty($_POST["username"])) {
        $usernameError = "Username is required.";
    } else {
        $username = test_input($_POST["username"]);
        // Additional validation for the username can be added here
    }

    // Validate password
    if (empty($_POST["password"])) {
        $passwordError = "Password is required.";
    } else {
        $password = test_input($_POST["password"]);
        // Additional validation for the password can be added here
    }

    // Validate email
    if (empty($_POST["email"])) {
        $emailError = "Email is required.";
    } else {
        $email = test_input($_POST["email"]);
        // Additional validation for the email can be added here
    }

    // Validate phone number
    if (empty($_POST["phone"])) {
        $phoneError = "Phone number is required.";
    } else {
        $phone = test_input($_POST["phone"]);
        // Additional validation for the phone number can be added here
    }

    // Validate date of birth
    if (empty($_POST["dob"])) {
        $dobError = "Date of Birth is required.";
    } else {
        $dob = test_input($_POST["dob"]);
        // Additional validation for the date of birth can be added here
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation Result</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .error-message {
            color: red;
            font-size: 12px;
            margin-top: 5px;
        }
    </style>
</head>
<body>

<h2>Form Validation Result</h2>

<p><strong>Username:</strong> <?php echo $username; ?></p>
<p><strong>Password:</strong> <?php echo $password; ?></p>
<p><strong>Email:</strong> <?php echo $email; ?></p>
<p><strong>Phone Number:</strong> <?php echo $phone; ?></p>
<p><strong>Date of Birth:</strong> <?php echo $dob; ?></p>

</body>
</html>
