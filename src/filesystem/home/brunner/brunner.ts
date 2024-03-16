import File from '@utils/structure/File';
import BrunnerUser from '@utils/structure/Users/BrunnerUser';
import writeups from './writeups/writeups';

export default class brunner extends File {
  public static readonly instance = new brunner();

  public name = 'brunner';
  public metadata = 'drwxr-xr-x';
  public owner = BrunnerUser.instance;
  public group = BrunnerUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
      writeups.instance
    ]);
  }
}
