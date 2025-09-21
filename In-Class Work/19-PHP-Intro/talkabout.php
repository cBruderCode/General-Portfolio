<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>PHP Introduction</title>

    <style>
      pre {
        padding: 20px;
        border: 2px solid lightpink;
      }
    </style>

  </head>

  <body>

    <h1>Note on testing</h1>

    <p>
      After testing this page for the first time, then
      reload the page after appending a query string.
    </p>

    <p>
      Example query string to append:<br>
      <code>?date=2022-10-25&ch=19&topic=backend+intro</code>
    </p>


<?php

    function addListItem($description, $item) {
      echo "<li>$description: $item</li>";
    }

?>

    <h1>Selected <code>$_SERVER</code> variables</h1>

    <ul>

<?php

addListItem("SERVER_NAME", $_SERVER["SERVER_NAME"]);
addListItem("SERVER_PROTOCOL", $_SERVER["SERVER_PROTOCOL"]);
addListItem("REQUEST_METHOD", $_SERVER["REQUEST_METHOD"]);
addListItem("REQUEST_TIME", $_SERVER["REQUEST_TIME"]);
addListItem("HTTP_USER_AGENT", $_SERVER["HTTP_USER_AGENT"]);
addListItem("REMOTE_ADDR", $_SERVER["REMOTE_ADDR"]);
addListItem("REMOTE_HOST", $_SERVER["REMOTE_HOST"]);
addListItem("NOPE", $_SERVER["NOPE"]);

?>

    </ul>

    <h1>Using <code>print_r</code> to inspect some superglobals</h1>

$_REQUEST<br>
<?php print_r($_REQUEST); ?></pre>

<pre>$_GET
<?php print_r($_GET); ?></pre>

<pre>$_POST
<?php print_r($_POST); ?></pre>

<pre>$_ENV
<?php print_r($_ENV); ?></pre>

<pre>$_SERVER
<?php print_r($_SERVER); ?></pre>

  </body>

</html>
