import File from '@utils/structure/File';
import BrunnerUser from '@utils/structure/Users/BrunnerUser';
import lactf from './la-ctf/lactf';

export default class year2024 extends File {
  public static readonly instance = new year2024();

  public name = '2024';
  public metadata = 'drwxr-xr-x';
  public owner = BrunnerUser.instance;
  public group = BrunnerUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
      lactf.instance
    ]);
  }
}
