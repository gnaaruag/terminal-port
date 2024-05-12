// // List of commands that require API calls

import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = `
  lms-project - <a href="https://github.com/gnaaruag/lms-project" target="_blank">https://github.com/gnaaruag/lms-project</a>
  pairdraw - <a href="https://github.com/gnaaruag/pairdraw" target="_blank">https://github.com/gnaaruag/pairdraw</a>
  todo-app - <a href="https://github.com/gnaaruag/todo-app" target="_blank">https://github.com/gnaaruag/todo-app</a>
  project-management-system - <a href="https://github.com/gnaaruag/proj-management-system" target="_blank">https://github.com/gnaaruag/proj-management-system</a>
  springboard-auth - <a href="https://github.com/gnaaruag/sb-auth-app" target="_blank">https://github.com/gnaaruag/sb-auth-app</a>`;
  return projects;
};




export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
