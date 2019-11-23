import chalk from "chalk";
import * as Table from "cli-table";

export default () => {
  const table = new Table({
    head: ["Commands", "Descriptions"],
    colWidths: [30, 50]
  });

  table.push(
    ["drab create component", "use to create a new command"],
    ["drab create hook", "use to create a hook"],
    ["drab create service", "use to create a service"],
    ["drab create page", "use to create a page"],
  );

  console.log(chalk.white("\ndrab [command]\n"));
  console.log(table.toString());
};
