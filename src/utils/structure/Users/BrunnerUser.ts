import visitor from '../../../filesystem/home/visitor/visitor';
import BrunnerGroup from '../Groups/BrunnerGroup';
import User from '../User';

export default class BrunnerUser extends User {
  public static readonly instance = new BrunnerUser();

  public id = 1000;
  public username = 'brunner';
  public password = 'brunner';
  public group = [
    BrunnerGroup.instance
  ];

  public getHome() {
    return visitor.instance;
  }

  public constructor() {
    super();
  }
}
