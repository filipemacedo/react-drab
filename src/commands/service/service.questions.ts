import * as inquirer from "inquirer";

export const createQuestions = async () => {
  return inquirer.prompt([
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
};

export const initQuestions = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "host",
      message: "What is the host of api?"
    }
  ]);
};
