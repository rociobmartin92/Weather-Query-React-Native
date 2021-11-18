export function capitalizeFirstLetter(string) {
  const arr = string.toLowerCase().split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const string2 = arr.join(' ');
  return string2;
}
