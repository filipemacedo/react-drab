import * as inquirer from "inquirer";
import { ComponentCreateQuestionsType } from "../../types/component.type";

export const createQuestions = async (): Promise<ComponentCreateQuestionsType> => {
  return inquirer.prompt([
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
      choices: ["rc", "rrc", "rsc", "rrsc", "rfc"]
    }
  ]);
};
