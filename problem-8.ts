{

  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    const checkKeys = Object.keys( obj as object);
    return keys.every((key) =>checkKeys.includes(key as string));

  }
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  const isValid = validateKeys(person, ["name", "age"]);
//   console.log(isValid);

  //
}
