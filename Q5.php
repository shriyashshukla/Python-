

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
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

<h2>Form Validation</h2>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <span class="error-message"><?php if (isset($usernameError)) echo $usernameError; ?></span>

    <br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <span class="error-message"><?php if (isset($passwordError)) echo $passwordError; ?></span>

    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <span class="error-message"><?php if (isset($emailError)) echo $emailError; ?></span>

    <br><br>

    <label for="phone">Phone Number:</label>
    <input type="text" id="phone" name="phone" pattern="[0-9]+" required>
    <span class="error-message"><?php if (isset($phoneError)) echo $phoneError; ?></span>

    <br><br>

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required>
    <span class="error-message"><?php if (isset($dobError)) echo $dobError; ?></span>

    <br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>
