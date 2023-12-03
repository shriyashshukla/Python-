<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
</head>
<body>

<?php
    // Function to calculate factorial
    function factorial($n) {
        if ($n === 0 || $n === 1) {
            return 1;
        } else {
            return $n * factorial($n - 1);
        }
    }

    // Get the number from the form submission
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number = isset($_POST['number']) ? intval($_POST['number']) : 0;

        // Validate the input (optional)
        if ($number < 0) {
            echo "<p>Please enter a non-negative number.</p>";
        } else {
            // Calculate factorial
            $result = factorial($number);

            // Display the result
            echo "<h2>Factorial Result</h2>";
            echo "<p>The factorial of $number is: $result</p>";
        }
    }
?>

<h2>Factorial Calculator</h2>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="number">Enter a number:</label>
    <input type="number" id="number" name="number" required>
    <button type="submit">Calculate Factorial</button>
</form>

</body>
</html>
