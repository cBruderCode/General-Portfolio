function drawTriangle(size) {
  num = 0
   while (num < size) {
     num++;
     string = "";
     for (i = 0; i < num; i++) {
       string = string + "*";
     }
     console.log(string);
   }

}
