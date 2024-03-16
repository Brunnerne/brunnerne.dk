import File from '@utils/structure/File';
import BrunnerUser from '@utils/structure/Users/BrunnerUser';
import lactfFile from './lactfmd';

export default class lactf extends File {
  public static readonly instance = new lactf();

  public name = 'la-ctf';
  public metadata = 'drwxr-xr-x';
  public owner = BrunnerUser.instance;
  public group = BrunnerUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
      lactfFile.instance
    ]);
  }
}
