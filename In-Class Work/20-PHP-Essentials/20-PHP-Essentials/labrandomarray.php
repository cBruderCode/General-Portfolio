<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Lab - Random Array</title>
    <style>
      .lab {
        padding: 20px;
        margin: 20px;
        background-color: lightpink;
        border: 2px solid hotpink;
      }

      code {
        padding: 2px;
        background-color: lightgray;
      }

      hr {
        height: 1px;
        border-width: 0px;
        background-color: lightgray;
        margin-top: 30px;
        padding: 0px;
      }

      table {
        border: 1px solid gray;
      }

      td {
        border: 1px solid gray;
        padding: 10px;
        vertical-align: top;
      }

      ul {
        margin: 0px;
      }

      p {
        line-height: 1.5;
      }
    </style>
  </head>

  <body>

    <h2>Notes</h2>

    <p>
      This lab makes use of the built-in <code>rand()</code> function.
    </p>

    <p>
      <code>rand(i, j)</code> will return a random number between the integers
      <code>i</code> and <code>j</code>, <strong>inclusive</strong>, which is
      different from most languages.  In other words, <code>j</code> is a
      possible return value, whereas typically the highest value that could
      be returned is <code>(j - 1)</code>.
    </p>

    <hr>

    <p>
      This lab also makes use of the built-in <code>array_push()</code>
      function.
    </p>

    <p>
      Suppose that <code>$scores</code> is the array <code>[8, 6, 7]</code>.
      Then calling <code>array_push($scores, 5)</code> will change the
      <code>$scores</code> array to become <code>[8, 6, 7, 5]</code>.
    </p>

    <hr>

    <p>
      Finally, this lab also makes use of the <code>implode()</code> function.
    </p>

    <p>
      <code>implode($sep, $arr)</code> returns a string representation of an
      array <code>$arr</code> where each array element is separated by the
      string <code>$sep</code>.
    </p>

    <h2>Lab</h2>

    <div class="lab">

<?php

// create a paragraph reporting a random number between 2 and 10



// create an empty array, then add random numbers (ea. between 10 and 99)
// to that array until its length matches the random number you reported
// in the previous paragraph.  Finally, create a paragraph displaying the
// array in between <code></code> tags.  Use the by using the implode()
// function to easily create a string representation of the array.


?>

      <table>
        <tr>
          <th>low</th>
          <th>high</th>
        </tr>
        <tr>

<?php

// add 2 cells to the table, with each cell displaying array elements:
// - the 1st cell has an unordered list of all of the numbers 10-54
// - the 2nd cell has an unordered list of all of the numbers 55-99





// challenge (not for any additional credit, just for fun):
// use this "helper" array to eliminate replicated code:
// $targets = [TRUE, FALSE]

?>
      </tr>
    </table>

    </div>

  </body>

</html>
