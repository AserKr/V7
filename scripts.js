/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    let words = str.split(" ");

    for (let word of words) {
      if (word.length > n.length) {
        n = word;
      }
    }

    return n;
  }
}

console.assert(
  longest("Aser is a software engineering student") === "engineering",
  "longest: returns the longest word from a sentence"
);
console.assert(
  longest("a bb ccc") === "ccc",
  "longest: returns the longest word from random strings"
);
console.assert(
  longest("") === "",
  "longest: returns empty string for empty input"
);
console.assert(
  longest(12345) === null,
  "longest: returns null when input is not a string"
);

function shortest(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    let words = str.split(" ");
    n = words[0];

    for (let word of words) {
      if (word.length < n.length) {
        n = word;
      }
    }

    return n;
  }
}
console.assert(
  shortest("Aser goes to HÍ") === "to",
  "shortest: returns the shortest word from a sentence"
);
console.assert(
  shortest("bb bab ccsdsc") === "bb",
  "shortest: returns the shortest word from random strings"
);
console.assert(
  shortest("") === "",
  "shortest: returns empty string for empty input"
);
console.assert(
  shortest(12345) === null,
  "shortest: returns null when input is not a string"
);

function reverse(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    words = str.split("");
    n = str.split("").reverse().join("");
    return n;
  }
}
console.assert(
  reverse("hæ") === "æh",
  "reverse: reverse the direction of a simple string"
);
console.assert(
  reverse("Noccothebest123") === "321tsebehtoccoN",
  "reverse: reverse the direction of a more difficult string"
);
console.assert(
  reverse(123) === null,
  "reverse: reverse the direction of an integer, returns null"
);
console.assert(
  reverse("") === "",
  "reverse: reverse the direction of an empty string, returns the empty string"
);

function palindrome(str) {
  // Útfæra
  if (!isString(str) || str.length == 0) {
    return false;
  }

  return reverse(str) === str;
}
console.assert(
  palindrome("ramar") === true,
  "palindrome: identifies a valid palindrome"
);
console.assert(
  palindrome("hæh") === true,
  "palindrome: identifies a valid palindrome"
);
console.assert(
  palindrome("hello") === false,
  "palindrome: identifies a non-palindrome"
);
console.assert(
  palindrome("") === false,
  "palindrome: returns false for empty string"
);
console.assert(
  palindrome(12321) === false,
  "palindrome: returns false when input is not a string"
);

function vowels(str) {
  // Útfæra
  let n = 0;
  if (!isString(str)) {
    return n;
  }

  let wordvowels = str.toLowerCase().split("");

  for (let i = 0; i < wordvowels.length; i++) {
    if (VOWELS.includes(wordvowels[i])) {
      n++;
    }
  }

  return n;
}

console.assert(
  vowels("Jæja strákar") === 4,
  "vowels: counts vowels in a sentence"
);
console.assert(vowels("aaa") === 3, "vowels: counts vowels in a string");
console.assert(
  vowels("bcdfgssszzz") === 0,
  "vowels: returns 0 when there are no vowels"
);
console.assert(vowels("") === 0, "vowels: returns 0 for empty string");
console.assert(
  vowels(12345) === 0,
  "vowels: returns 0 when input is not a string"
);
console.assert(
  vowels("zzzzzzzzzaeiouyáéýúíóöæzzzzzzzzzz") === 14,
  "vowels: recognizes all of the icelandic vowels"
);

function consonants(str) {
  // Útfæra
  let n = 0;
  if (!isString(str)) {
    return n;
  }

  let wordcons = str.toLowerCase().split("");

  for (let i = 0; i < wordcons.length; i++) {
    if (CONSONANTS.includes(wordcons[i])) {
      n++;
    }
  }

  return n;
}

console.assert(
  consonants("Jæja strákar") === 7,
  "consonants: counts consonants in a sentence"
);
console.assert(
  consonants("bbb") === 3,
  "consonants: counts consonants in a string of consonants"
);
console.assert(
  consonants("aeiou") === 0,
  "consonants: returns 0 when there are no consonants"
);
console.assert(consonants("") === 0, "consonants: returns 0 for empty string");
console.assert(
  consonants(12345) === 0,
  "consonants: returns 0 when input is not a string"
);
console.assert(
  consonants("aaaaaaaaaaaaaaaaaabcdfghjklmnpqrstvwxzaaaaaaaaaaaaaaaaa") === 20,
  "consonants: recognizes all of the consonants"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
  alert(
    "Welcome! Please enter a string with a few words and it will be analyzed and the following information will be showed:\n -Longest word\n -Shortest word\n -The string reversed\n -Number of Icelandic vowels\n -Number of consonants\n -If the string is a palindrome"
  );

  while (true) {
    const userInput = prompt("Enter a string to analyze:");

    if (userInput === null) {
      const tryAgain = confirm("Do you want to try again?");
      if (!tryAgain) {
        break;
      }
      continue;
    }

    if (userInput === "") {
      const tryAgain = confirm(
        "You did not enter anything, do you want to try again?"
      );
      if (!tryAgain) {
        break;
      }
      continue;
    }
    const longestWord = longest(userInput);
    const shortestWord = shortest(userInput);
    const reversedStr = reverse(userInput);
    const vowelCount = vowels(userInput);
    const consonantCount = consonants(userInput);
    const isPalindrome = palindrome(userInput);

    const results = `Results:
    - Longest word: ${longestWord}
    - Shortest word: ${shortestWord}
    - Reversed string: ${reversedStr}
    - Vowel count: ${vowelCount}
    - Consonant count: ${consonantCount}
    - Is palindrome: ${isPalindrome ? "Yes" : "No"}`;

    alert(results);

    const again = confirm("Do you want to try again?");
    if (!again) {
      break;
    }
  }
}
