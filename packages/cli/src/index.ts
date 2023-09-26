import { Command } from "commander";
import { PromptObject, prompt } from "prompts";
import { validateAppName } from "./utils";
import packageJson from "../package.json";

const projectChoices = [
  {
    title: "next",
  },
  {
    title: "nifi",
  },
  {
    title: "ansible",
  },
  {
    title: "python",
  },
];

const projectMap = projectChoices.map(({ title }) => title);

const questions: PromptObject[] = [
  {
    type: "text",
    name: "name",
    message: "What is your projects name?",
    initial: "project",
    validate: (text) =>
      validateAppName(text)
        ? true
        : "App name must consist of only lowercase alphanumeric characters, '-', and '_'",
  },
  {
    type: "multiselect",
    name: "projects",
    message: "Select your stack",
    instructions: false,
    min: 1,
    choices: [
      {
        title: "nifi",
      },
      {
        title: "ansible",
      },
      {
        title: "next",
      },
      {
        title: "python",
      },
    ],
  },
  {
    type: "toggle",
    name: "initGit",
    message: "Initialize git repositories?",
    active: "yes",
    inactive: "no",
    initial: true,
  },
];

export async function main() {
  console.log(`Zeevo's Create Project @${packageJson.version}`);

  // const program = new Command()
  //   .name("create-project")
  //   .description("A CLI for cloning @zeevo starters")
  //   .argument("[name]", "The name of the new project")
  //   .option("-l, --limit <project>")
  //   .parse(process.argv);

  const project = await prompt(questions);
}

main();
