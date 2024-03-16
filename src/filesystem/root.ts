import File from '@utils/structure/File';
import RootUser from '@utils/structure/Users/RootUser';
import etc from '@filesystem/etc/etc';
import home from '@filesystem/home/home';

export default class root extends File {
  public static readonly instance = new root();

  public name: string = '/';
  public metadata = 'drwxr-xr-x';
  public owner = RootUser.instance;
  public group = RootUser.instance.group[0];

  protected constructor() {
    super();

    this.linkChildren([
      etc.instance,
      home.instance
    ]);
  }
}
