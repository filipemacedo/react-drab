import * as inquirer from "inquirer";

type CreateQuestionsType = {
  name: string;
};

export const createQuestions = async (): Promise<CreateQuestionsType> => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the hook?"
    }
  ]);
};
