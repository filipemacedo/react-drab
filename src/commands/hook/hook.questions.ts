import * as inquirer from "inquirer";
import removePromptNameQuestion from "../../helpers/remove-prompt-name-question";

type CreateQuestionsType = {
  name?: string;
};

export const createQuestions = async (
  name: string
): Promise<CreateQuestionsType> => {
  const questions = removePromptNameQuestion(name, [
    {
      type: "input",
      name: "name",
      message: "What is the name of the hook?"
    }
  ]);

  return inquirer.prompt(questions);
};
