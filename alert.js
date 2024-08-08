<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="alert.js"></script>
  </body>
</html>
alert('Я – JavaScript!')
//завдання 2.1


  < !DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let admin, name;
      name = "Іван";
      admin = name;
      alert(admin);
    </script>
   
    <script>
      let planetName = "Земля";
      let userName = "Ілля";
    </script>
  </body>
  </html>
  //завдання 2.4


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let name = prompt("Як вас звати?", "Ілля");
      alert(name);
    </script>
  </body>
  </html>
//завдання 2.6


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let a = prompt("Перше число?", 1);
      let b = prompt("Друге число?", 2);
      alert(+a + +b);
    </script>
  </body>
</html>
//завдання 2.8

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let name = prompt("Яка “офіційна” назва JavaScript?", "");
      if (name == "ECMAScript") {
        alert("Правильно!");
      } else {
        alert("Ви не знаєте? ECMAScript!");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      if (a + b < 4) ? 'Нижче' : 'Вище';
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let message =
        login == "Працівник"
          ? "Привіт"
          : login == "Директор"
          ? "Вітаю"
          : login == ""
          ? "Немає логіну"
          : "";
    </script>
  </body>
</html>
//завдання 2.10


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let age = 44;
      if (age >= 14 && age <= 90) {
        alert("True!");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let age = 11;
      if (!(age >= 14 && age <= 90)) {
        alert("True!");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let age = 11;
      if (age < 14 || age > 90) {
        alert("True!");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let userName = prompt("Who is there?", "");
      if (userName === "Admin") {
        let pass = prompt("Password?", "");
        if (pass === "TheMaster") {
          alert("Welcome!");
        } else if (pass === "" || pass === "null") {
          alert("Canceled");
        } else {
          alert("Wrong password");
        }
      }
      if (userName === "" || userName === "null") {
        alert("Canceled");
      } else {
        alert("I dont know you");
      }
    </script>
  </body>
</html>
//завлання 2.11


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          alert(i);
        }
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let i = 0;
      while (i < 3) {
        alert(`число ${i}!`);
        i++;
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let num;
      do {
        num = prompt("число більше за 100?", 0);
      } while (num <= 100 && num);
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let n = 10;
      nextNumber: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextNumber;
        }
        alert(i);
      }
    </script>
  </body>
</html>
//завдання 2.13


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      if (browser === "Edge") {
        alert("You have got the Edge!");
      } else if (
        browser == "Chrome" ||
        browser == "Firefox" ||
        browser == "Safari" ||
        browser == "Opera"
      ) {
        alert("Ми підтримуємо і ці браузери");
      } else {
        alert("Маємо надію, що ця сторінка виглядає добре!");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let a = +prompt("a?", "");
      switch (a) {
        case 0:
          alert(0);
          break;

        case 1:
          alert(1);
          break;

        case 2:
        case 3:
          alert("2,3");
          break;
      }
    </script>
  </body>
  </html>
//завдання 2.14


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function checkAge(age) {
        return age > 18 ? true : confirm("Батьки дозволили?");
      }
    </script>

    <script>
      function checkAge(age) {
        return age > 18 || confirm("Батьки дозволили?");
      }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function min(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
    </script>
  </body>
  </html>
//завдання 2.15


<!DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
      }
      ask(
        "Ви згодні?",
        () => alert("Ви погодились."),
        () => alert("Ви скасували виконання.")
      );
    </script>
  </body>
  </html>
//завдання 2.17




      
