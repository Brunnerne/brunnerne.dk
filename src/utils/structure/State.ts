import root from '../../filesystem/root';
import File from './File';
import User from './User';
import VisitorUser from './Users/VisitorUser';
import RootUser from './Users/RootUser';
import Group from './Group';
import brunner from '@filesystem/home/brunner/brunner';
import BrunnerUser from './Users/BrunnerUser';

export default class State {
  public static readonly instance = new State();

  public users: User[] = [
    RootUser.instance,
    BrunnerUser.instance,
    VisitorUser.instance,
  ];

  public groups: Group[] = [];

  public dir: File = brunner.instance;
  public user: User = BrunnerUser.instance;
  public root: File = root.instance;
  private nextDir: File | undefined = undefined;

  public queueDirChange(dir: File): void {
    this.nextDir = dir;
  }

  public changeDir(): void {
    if (this.nextDir) {
      this.dir = this.nextDir;
      this.nextDir = undefined;
    }
  }

  protected constructor() {
    console.info('State initiated.')
    // console.debug('State:', this);
  }
}
