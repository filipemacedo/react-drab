import { CommandTerminatedType, argvType } from '../types/commands.type';
import { finished, notFinished } from './command-terminated';
import { isCommand } from './is-command';

export default ({ actions, commands }) => (args: argvType): CommandTerminatedType => {
	const { _, help, name, ...props } = <argvType>args;

	const isCommandWithArgs: Function = isCommand(_);

	const isDefinedCommand: boolean = isCommandWithArgs(commands);

	if (isDefinedCommand) {
		actions.create({ help, fileName: name || _[2], ...props });

		return finished();
	}

	return notFinished();
};
