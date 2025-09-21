<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>PHP Intro</title>
    <style>

      div {
        margin: 20px;
        padding: 20px;
      }

      .part1 {
        background-color: lightpink;
      }

      .part2 {
        background-color: lightskyblue;
      }

      .part3 {
        background-color: lightgray;
      }

    </style>

  </head>

  <body>

    <div class="part1">
      <h2>Part 1 - Query String</h2>

      <ul>
<?php

foreach($_GET as $name => $value) {
  echo "<li><strong>$name</strong>: $value</li>";
}

?>
      </ul>
    </div>

    <div class="part2">
      <h2>Part 2 - Time Until Thanksgiving</h2>
<?php

// depending on your server configuration and PHP configuration,
// you might want to uncomment the line of code below
date_default_timezone_set("America/New_York");


?>
    </div>

    <div class="part3">
      <h2>Part 3 - Inspecting the Difference Object</h2>

<?php


?>

    </div>

  </body>

</html>
