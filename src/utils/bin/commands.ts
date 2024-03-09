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
    window.open(`https://www.linkedin.com/company/${config.social.linkedin}/`);
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

  Join us on discord at <a href="http://discord.brunnerne.dk" target="_blank">http://discord.brunnerne.dk</a>
  `;
}

  return `

  01001111  01011111  01100010  01011011  01011011  01010010  01011111  01011011  01010010

  0010101                                                                                   
  00    11                                                                                  
  00    10   001000   00    00  1111001   0111000    000111    101011   1101001    000000   
  0110110   00    01  00    01  10    01  11    10  10    11  01    10  00    11  01    11  
  10    01  00        00    10  01    00  10    00  11110110  11        11    01  10100000  
  00    01  00        00    10  11    11  01    10  11        10        01    00  11        
  0110001   11         000001   11    10  01    00   1111100  01        01    10   0010011
  
  11010111  11011000  10010110  11010110  11010100  10010111  11010110  11010100  10001010

  Brunnerne CLI

  Type 'help' to see the list of available commands.

  Join us on discord at <a href="http://discord.brunnerne.dk" target="_blank">http://discord.brunnerne.dk</a>
  `;
};
