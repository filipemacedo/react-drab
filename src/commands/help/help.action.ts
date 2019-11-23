import chalk from "chalk";
import * as Table from "cli-table";

export default () => {
  const table = new Table({
    head: ["Commands", "Descriptions"],
    colWidths: [30, 50]
  });

  table.push(
    [
      "drab create component [name]",
      "Command responsible for creating a new component."
    ],
    ["drab create hook [name]", "Command responsible for creating a new hook."],
    [
      "drab create service [name]",
      "Command responsible for creating a new service."
    ],
    ["drab create page [name]", "Command responsible for creating a new page."]
  );

  console.log(chalk.white("\ndrab [command]\n"));
  console.log(table.toString());
};
