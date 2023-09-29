import root from '../../../filesystem/root';
import Group from '../Group';
import RootGroup from '../Groups/RootGroup';
import User from '../User';

export default class RootUser extends User {
  public static readonly instance = new RootUser();

  public id: number = 0;
  public username: string = 'root';
  public password: string = 'root';
  public group = [RootGroup.instance];

    public getHome() {
      return root.instance;
    }
}
