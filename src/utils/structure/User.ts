import { setTimeout } from 'timers';
import File from './File';
import Group from './Group';

export default abstract class User {
  public static readonly instance: User;

  /**
   * The id of the User.
   */
  public abstract id: number;

  /**
   * The username of the User.
   */
  public abstract username: string;

  /**
   * The password of the User.
   */
  public abstract password: string;

  /**
   * The groups of the User.
   */
  public abstract group: Group[];

  /**
   * Get the home directory of the User.
   */
  public abstract getHome(): File;

  protected constructor() {
    this.linkGroup();
  }

  protected linkGroup(): void {
    setTimeout(() => {
      this.group.forEach((group) => {
        group.members.push(this);
      });
    }, 0);
  }
}
