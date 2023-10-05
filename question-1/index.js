function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
      if (array.length === 0) {
        reject("Array is empty");
      } else {
        const filtered = array
          .filter((item) => typeof item === "string")
          .map((word) => word.toLowerCase());
        resolve(filtered);
      }
    });
}
  
  // Testing
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
    .then((result) => {
      console.log("Output:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
});
