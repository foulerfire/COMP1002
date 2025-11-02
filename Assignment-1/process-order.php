<!--referenced process-form from lesson 4 to complete this part -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Pizza Order Confirmation - Rest in Pepperoni's</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <h1>Rest in Pepperoni's</h1>
    </header>

    <main>
        <h2>Your Order Has Been Received!</h2>

        <?php
            // capture all form data using GET command 
            $name     = $_GET["customer_name"];
            $email    = $_GET["customer_email"];
            $address  = $_GET["customer_address"];
            $quantity = $_GET["pizza_quantity"];
            $size     = $_GET["pizza_size"];
            $shape    = $_GET["pizza_shape"];
            $crust    = $_GET["pizza_crust"];
            $order    = $_GET["ordertype"];
            $notes    = $_GET["special_instructions"];
            $toppings = $_GET["toppings"];

            // confirmnation summary of order
            echo '<p>Thank you, ' . $name . '!</p>';
            echo '<p>We will send a confirmation email to: ' . $email . '</p>';

            echo '<h3>Order Summary</h3>';
            echo '<ul>';
                echo '<li>Number of pizzas: ' . $quantity . '</li>';
                echo '<li>Size: ' . $size . '</li>';
                echo '<li>Shape: ' . $shape . '</li>';
                echo '<li>Crust: ' . $crust . '</li>';
                echo '<li>Order type: ' . $order . '</li>';
                echo '<li>Delivery address: ' . $address . '</li>';
            echo '</ul>';

            echo '<h3>Toppings</h3>';
            echo '<ul>';
                // loop through toppings array to ouput each selected topping
                foreach ($toppings as $item) {
                    echo '<li>' . $item . '</li>';
                }
            echo '</ul>';

            echo '<h3>Special Instructions</h3>';
            echo '<p>' . $notes . '</p>';
        ?>

        <p><a href="index.html">← Back to Order Form</a></p>
    </main>

    <footer>
        <p><small>© 2025 Rest in Pepperoni's. All rights reserved.</small></p>
    </footer>
</body>
</html>
