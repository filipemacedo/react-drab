export const isCommand = (args: string[]) => (commands: string[]) => {
  return !commands
    .reduce((previous: boolean[], current: string) => {
      return [...previous, args.includes[current]];
    }, [])
    .includes(false);
};