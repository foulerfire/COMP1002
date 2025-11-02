<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Pizza Order Confirmation</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

    <body>
        <header>
            <h1>Rest in Pepperoni's</h1>
        </header>
        
        <main>
            <h2>Your order was received</h2>
            <?php
                // grabs the basic info submitted by user
                $name     = $_GET["name"];
                $email    = $_GET["email"];
                $phone    = $_GET["phone"];
                $address  = $_GET["address"];

                $quantity = $_GET["quantity"];
                $size     = $_GET["size"];
                $shape    = $_GET["shape"];
                $crust    = $_GET["crust"];
                $order    = $_GET["order_type"];
                $notes    = $_GET["instructions"];

                // toppings will come in as an array
                $toppings = $_GET["toppings"];

                // confirmation message
                echo '<p>Thank you, ' . $name . '!</p>'
            ?>
    </body>
</html>