import File from '../../utils/structure/File';
import Visitor from './Visitor/Visitor';

export default class Home extends File {
  public static readonly instance = new Home();

  public name = 'home';
  public metadata = 'dr--';
  public owner = undefined;

  public constructor() {
    super();
    Visitor.instance.setParent(this);
  }
}
