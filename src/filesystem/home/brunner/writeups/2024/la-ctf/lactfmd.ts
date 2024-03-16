import File from '@utils/structure/File';
import BrunnerUser from '@utils/structure/Users/BrunnerUser';
import { renderToString } from 'react-dom/server';

export default class lactfFile extends File {
  public static readonly instance = new lactfFile();

  public name = 'la-ctf.md';
  public metadata = '-rw-rw-r--';
  public owner = BrunnerUser.instance;
  public group = BrunnerUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
    ]);

    // Set content
    this.content = "Find this writeup at <a href='/writeups/2024/la-ctf'>/writeups/2024/la-ctf</a> <br>";
    this.size = this.content.length;
  }
}
