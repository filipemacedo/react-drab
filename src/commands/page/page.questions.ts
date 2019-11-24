import * as inquirer from "inquirer";
import { ComponentCreateQuestionsType } from "../../types/component.type";
import removePromptNameQuestion from "../../helpers/remove-prompt-name-question";

export const createQuestions = async (
  name
): Promise<ComponentCreateQuestionsType> => {
  const questions = removePromptNameQuestion(name, [
    {
      type: "input",
      name: "name",
      message: "What is the name of the page"
    },
    {
      type: "list",
      name: "theme",
      choices: ["css", "styled-components", "none"],
      message: "Which stylization do you prefer?"
    },
    {
      type: "list",
      name: "type",
      message: "What type of component?",
      choices: [
        "rc (Stateful Component)",
        "rrc (Stateful component connected to Redux)",
        "rsc (Stateless Component)",
        "rrsc (Stateless component connected to Redux)",
        "rfc (Functional Component)"
      ]
    }
  ]);

  return inquirer.prompt(questions);
};
