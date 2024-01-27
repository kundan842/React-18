const categories = [
  "grocery",
  "utilities",
  "stationary",
  "entertainment",
] as const;

// here categories.push('new cat') will work as it is not readonly constant
// categories = [3] will give error as cant refrer to new array but to same array elmenet can be added
// so to make it read only constant  use as const

export default categories;
