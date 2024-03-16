import File from '@utils/structure/File';
import RootUser from '@utils/structure/Users/RootUser';
import group from './group';

export default class etc extends File {
  public static readonly instance = new etc();

  public name = 'etc';
  public metadata = 'drwxr-xr-x';
  public owner = RootUser.instance;
  public group = RootUser.instance.group[0];

  protected constructor() {
    super();
    this.linkChildren([
      group.instance
    ]);
  }  
}
