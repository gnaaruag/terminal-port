// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = `
  about   banner   cd   date   echo   email   github  
  help   linkedin   ls   projects   readme   resume
  sumfetch   weather   whoami`
  return `Welcome! Here are all the available commands:
\n${commands}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};




// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `root  dev  desktop  downloads  documents  my-photography  books  
poetry  music  
  `;
};

export const cd = async (args: string[]): Promise<string> => {
  return `you do not have access to this folder. contact network administrator...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};



// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// Banner
export const banner = (args?: string[]): string => {
  return `
  #  ███            █████████                                                              
  # ░░░███         ███░░░░░███                                                             
  #   ░░░███      ███     ░░░   ██████   █████ ████ ████████   ██████   ████████    ███████
  #     ░░░███   ░███          ░░░░░███ ░░███ ░███ ░░███░░███ ░░░░░███ ░░███░░███  ███░░███
  #      ███░    ░███    █████  ███████  ░███ ░███  ░███ ░░░   ███████  ░███ ░███ ░███ ░███
  #    ███░      ░░███  ░░███  ███░░███  ░███ ░███  ░███      ███░░███  ░███ ░███ ░███ ░███
  #  ███░         ░░█████████ ░░████████ ░░████████ █████    ░░████████ ████ █████░░███████
  # ░░░            ░░░░░░░░░   ░░░░░░░░   ░░░░░░░░ ░░░░░      ░░░░░░░░ ░░░░ ░░░░░  ░░░░░███
  #                                                                                ███ ░███
  #                                                                               ░░██████ 
  #                                                                                ░░░░░░  

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
