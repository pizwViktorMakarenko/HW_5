/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {

  const words = str.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {

    let word = words[i];

    if (word.length > 0) {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    } else {
      capitalizedWords.push(word);
    }
  }

  return capitalizedWords.join(' ');
}

