function panggilFilter() {
  let numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

  let result = numbers.filter((number) => {
    return number > 15;
  });

  console.log(result);
}

panggilFilter();
