export default (hasName: boolean | string, questions: any[] = []) => {
  if (hasName) return questions.filter(({ name }) => name !== "name");

  return questions;
};
