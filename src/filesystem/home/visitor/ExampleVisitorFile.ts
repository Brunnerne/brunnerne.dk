import File from '../../../utils/structure/File';
import VisitorUser from '../../../utils/structure/Users/VisitorUser';
import visitor from './visitor';

export default class ExampleVisitorFile extends File {
  public static readonly instance = new ExampleVisitorFile();

  public name: string = 'ExampleVisitorFile';
  public metadata = '-rw-------';
  public owner = VisitorUser.instance;
  public group = VisitorUser.instance.group[0];

  protected content = 'This is an example visitor file.';
  public size = this.content.length;
}
