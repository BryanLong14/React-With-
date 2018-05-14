export function selectBook(book) {
  console.log("A book was selected", book.title);
  // selectBook is an ActionCreator and needs to return an Action (an object with a type prop)
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
