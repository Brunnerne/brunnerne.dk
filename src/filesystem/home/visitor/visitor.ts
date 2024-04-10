import File from '@utils/structure/File';
import VisitorUser from '@utils/structure/Users/VisitorUser';
import ExampleVisitorFile from './ExampleVisitorFile';

export default class visitor extends File {
  public static readonly instance = new visitor();

  public name: string = 'visitor';
  public metadata = 'drwxr-xr-x';
  public owner = VisitorUser.instance;
  public group = VisitorUser.instance.group[0];
  
  protected constructor() {
    super();

    this.linkChildren([
      ExampleVisitorFile.instance
    ]);
  }
}
