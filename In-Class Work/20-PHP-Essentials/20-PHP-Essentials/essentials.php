<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>PHP Essentials</title>
    <style>
      body {
        font-family: sans-serif;
      }

      h2 {
        padding: 5px;
        background-color: lightgray;
      }

      .note {
        font-weight: bold;
        color: maroon;
      }
    </style>
  </head>

  <body>

    <h2>Partial Coverage</h2>

    <p>
      We'll cover a selection of PHP essentials that are a little different
      than other languages you have used in the past.  We'll skip coverage of
      things are identical or almost identical:
    </p>

    <ul>
      <li>Math operators: almost identical to JavaScript</li>
      <li>Comparisons: identical to JavaScript</li>
      <li>Conditionals: almost identical to JavaScript</li>
    </ul>

    <h2>Scalar Variables, Constants, &amp; the <code>var_dump()</code> function</h2>

<?php
  $name = "Elon";
  echo $name;
  echo "<br>";
  var_dump($name);
  echo "<br>";
  echo "<br>";

  define("BR", "<br>");

  $year = 1889;
  echo $year;
  echo BR;
  var_dump($year);
  echo BR;
  echo BR;

  $graduationRate = 0.82;
  echo $graduationRate;
  echo BR;
  var_dump($graduationRate);
  echo BR;
  echo BR;

  $isBusiness = TRUE;
  echo "is a business: ... ";
  echo $isBusiness;
  echo " ...";
  echo BR;
  var_dump($isBusiness);
  echo BR;
  echo BR;

  $isBusiness = FALSE;
  echo "is a business: ... ";
  echo $isBusiness;
  echo " ...";
  echo BR;
  var_dump($isBusiness);
  echo BR;
  echo BR;
?>

    <div class="note">
      <code>var_dump()</code> is not discussed in zyBooks, but you will likely
      want to use it for debugging.
    </div>

    <h2>Functions</h2>

<?php

function report($item) {
  echo $item;
  echo BR;
  var_dump($item);
  echo BR;
  echo BR;
}

$name = "Elon";
report($name);

$year = 1889;
report($year);

$graduationRate = 0.82;
report($graduationRate);

?>
    <h2>Strings: Interpolation, Escaping, Concatenation, Functions, etc.</h2>

<?php

  // we use single quotes here.
  // variables are *not* interpolated
  // the concatenation operator is the dot: .
  // also notice: $name and BR persist from the previous block
  $message = '$name is ... ' . $name . ' ...' . BR;
  echo $message;


  // we use double quotes here.  variables are interpolated.  constants are not.
  // the dollar sign is escaped (with \) in order to match the printout above.
  echo "\$name is ... $name ...BR";


  // constants should be used outside of the interpolated string
  echo BR . "\$name is ... $name ..." . BR . BR;


  // there are numerous string-oriented functions
  // a difference is that the functions take strings as inputs
  // rather than being called "on" the strings (like JS, Python, and Java)
  $len = strlen($name);  // not $len = $name.strlen() or $len = $name->strlen()
  echo "The length of '$name' is $len" . BR . BR;

  $point = ord(strtolower($name));
  echo 'var_dump($point) produces ';
  var_dump($point);
  echo BR;

  echo "var_dump($point) produces ";
  var_dump($point);
  echo BR;

?>

    <h2>Arrays: Indexed &amp; Associative; <code>count()</code> function.</h2>

<?php

function pre_print_r($arr) {
  echo "<pre>";
  print_r($arr);
  echo "</pre>";
}

function display($name, $arr) {
  $len = count($arr);
  echo '<div class="note">';
  echo "The array has $len elements or key-value pairs</div>";
  var_dump($arr);
  echo BR . "$name: $arr" . BR . BR;
  pre_print_r($arr);
  echo BR . BR;
}

$office = ["Dwight", "Jim", "Pam"];
display("office", $office);

$office = array("Angela", "Oscar", "Kevin", "Creed");
display("office", $office);

// https://www.imdb.com/title/tt0083399/fullcredits

$cheers = [
  "Sam" => 271,
  "Woody" => 201,
  "Rebecca" => 149,
  "Diane" => 149];

display("cheers", $cheers);

$cheers = array("Carla" => 271, "Frasier" => 202, "Coach" => 71);
display("cheers", $cheers);

display("_SERVER", $_SERVER);

?>

    <h2>Loops: <code>foreach</code> and <code>for</code></h2>

    <ol start="0">
      <?php
        foreach($office as $character) {
          echo "<li>$character</li>";
        }
      ?>
    </ol>

    <ul>
      <?php
        foreach($cheers as $character => $appearances) {
          echo "<li>$character appeared $appearances times.</li>";
        }
      ?>
    </ul>

    <ul>
      <?php

        $spring = [3300, 3320, 3340, 3360, 3707, 4422, 4510, 4717];
        for ($i = 0; $i < count($spring); $i++) {
          echo "<li>at index $i is $spring[$i]</li>";
        }

      ?>
    </ul>

  </body>

</html>
