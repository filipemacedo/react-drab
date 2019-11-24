import * as inquirer from "inquirer";
import removePromptNameQuestion from "../../helpers/remove-prompt-name-question";

type ServiceCreateQuestionsType = {
  name: string;
  endpoint: string;
  verbs: string[];
};

export const createQuestions = async (
  name
): Promise<ServiceCreateQuestionsType> => {
  const questions = removePromptNameQuestion(name, [
    {
      type: "input",
      name: "name",
      message: "What is the name of the service?"
    },
    {
      type: "input",
      name: "endpoint",
      message: "What is the endpoint?"
    },
    {
      type: "checkbox",
      name: "verbs",
      message: "Select the methods you want to use",
      choices: ["create", "remove", "findOne", "findAll", "update"]
    }
  ]);

  return inquirer.prompt(questions);
};

type InitQuestionsType = {
  host: string;
};

export const initQuestions = async (): Promise<InitQuestionsType> => {
  return inquirer.prompt([
    {
      type: "input",
      name: "host",
      message: "What is the host of api?"
    }
  ]);
};
