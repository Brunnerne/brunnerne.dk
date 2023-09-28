import File from '../../utils/structure/File';
import RootUser from '../../utils/structure/Users/RootUser';
import visitor from './visitor/visitor';

export default class home extends File {
  public static readonly instance = new home();

  public name = 'home';
  public metadata = 'drwxr-xr-x';
  public owner = RootUser.instance;
  public group = RootUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
      visitor.instance
    ]);
  }
}
