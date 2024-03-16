import root from '../../filesystem/root';
import visitor from '../../filesystem/home/visitor/visitor';
import File from './File';
import User from './User';
import VisitorUser from './Users/VisitorUser';
import RootUser from './Users/RootUser';
import Group from './Group';

export default class State {
  public static readonly instance = new State();

  public users: User[] = [
    VisitorUser.instance,
    RootUser.instance,
  ];

  public groups: Group[] = [];

  public dir: File = visitor.instance;
  public user: User = VisitorUser.instance;
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
