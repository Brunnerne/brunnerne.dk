import visitor from '../../../filesystem/home/visitor/visitor';
import Group from '../Group';
import VisitorGroup from '../Groups/VisitorGroup';
import User from '../User';

export default class VisitorUser extends User {
  public static readonly instance = new VisitorUser();

  public id = 1000;
  public username = 'visitor';
  public password = 'visitor';
  public group = [
    VisitorGroup.instance
  ];

  public getHome() {
    return visitor.instance;
  }

  public constructor() {
    super();
  }
}
