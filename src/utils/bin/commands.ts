// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import State from '../structure/State';

// Help
export const help = async (args: string[]): Promise<string> => {
  // Retrieve commands
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + ',\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }

  // Remove last comma
  c = c.slice(0, -2);

  // Return help text
  return `Welcome to the Brunnerne CLI! \n
Here are all the available commands:
    \n${c}\n
    [tab]: trigger completion.
    [ctrl+l]/clear: clear terminal.
  `;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`${config.repo}`);
  }, 500);

  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, we are ${config.name}. 

Come check us out at <a href="${config.social.discord}" target="_blank">${config.social.discord}</a>!`;
};

export const github = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`https://github.com/${config.social.github}/`);
  }, 500);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  }, 500);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${State.instance.user.username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {

  // Detect small screens
  const small = window.innerWidth < 740;

if (small) {
  return `
  
  Brunnerne CLI

  Type 'help' to see the list of available commands.
  Type 'sumfetch' to display summary.
  `;
}

  return `

  1000101                                                                                   
  11    01                                                                                  
  01    11   101111   10    01  0011010   0011011    001111    010111   0111010    110011   
  1010011   00    11  01    01  11    10  01    00  10    00  10    00  00    10  01    00  
  01    11  11        00    00  10    10  00    11  00011000  00        01    01  00001111  
  00    01  10        01    01  01    01  01    10  10        11        01    11  00        
  1000011   01         000100   00    10  10    11   1110100  11        10    11   1101111

  Brunnerne CLI

  Type 'help' to see the list of available commands.
  Type 'sumfetch' to display summary.
  `;
};
