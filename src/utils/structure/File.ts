import group from '../../filesystem/etc/group';
import Group from './Group';
import State from './State';
import User from './User';

/**
 * The File class.
 *
 * The File class is the base class for all files.
 * It contains the basic properties and methods for all files.
 */
export default abstract class File {
  public static readonly instance: File;

  /**
   * The name of the File.
   */
  public abstract name: string;

  /**
   * The parent of the File.
   */
  protected parent: File | undefined = undefined;

  /**
   * The children of the File.
   */
  protected children: File[] = [];

  /**
   * File content.
   */
  protected content: string = '';

  /**
   * The size of the File.
   */
  public size: number = 0;

  /**
   * The metadata of the File.
   *
   * The metadata is a string of 10 characters.
   * This string is split into 4 parts:
   * - First part (1 character) determines the file type
   * - Second part (3 characters) determines the permission for thr owner of the file.
   * - Third part (3 characters) determines the permission for the group owning the file.
   * - Fourth part (3 characters) determines the permissions for others.
   * 
   * The type of the File can be:
   * - d: directory
   * - -: file
   *
   * The permissions can be:
   * - r: read
   * - w: write
   * - x: execute
   * - -: no permission
   * permission is always`rwx`. 
   * Any part that is exchanged with `-`, will result in the permission being revoked for the party it repredents.
   *
   * Example:
   * - drwx: directory, read, write, execute
   */
  public abstract metadata: string;

  /**
   * The owner of the File.
   *
   * The owner is the User that created the File.
   */
  public abstract owner: User;

  /**
   * The group of the File.
   * 
   * The group represent the Group that owns the File.
   */
  public abstract group: Group;

  protected constructor() { }

  /**
   * Links list of children to parent, and thereby also initializes the children.
   */
  protected linkChildren(children: File[], parent: File = this): void {
    children.forEach(child => {
      child.setParent(parent);
    });
  }

  /**
   * Reads the File.
   *
   * @returns returns the content of the File.
   */
  async read(): Promise<string> {
    return this.content;
  }

  /**
   * Executes the executable.
   *
   * @param params The parameters to execute the executable with.
   * @returns The result of the execution.
   */
  async execute(params: {}): Promise<any> {
    return;
  }

  /**
   * Check if the File is a directory.
   */
  public isDirectory(): boolean {
    return this.metadata[0] === 'd';
  }

  /**
   * Whether the File is readable or not.
   *
   * @returns Whether the File is readable or not.
   */
  public isReadable(): boolean {

    if (this.owner === State.instance.user) {
      return this.isOwnerReadable();
    }

    State.instance.user.group.forEach((group) => {
      if (this.isGroupReadable()) {
        return true;
      }
    });

    return this.metadata[7] === 'r';
  }

  /**
   * Whether the File is readable by the owner or not.
   *
   * @returns Whether the File is readable by the owner or not.
   */
  public isOwnerReadable(): boolean {
    return this.metadata[1] === 'r';
  }

  /**
   * Whether the File is readable by the group or not.
   *
   * @returns Whether the File is readable by the group or not.
   */
  public isGroupReadable(): boolean {
    return this.metadata[4] === 'r';
  }

  /**
   * Whether the File is writable or not.
   *
   * @returns Whether the File is writable or not.
   */
  public isWritable(): boolean {
    if (this.owner === State.instance.user) {
      return this.isOwnerWritable();
    }

    State.instance.user.group.forEach((group) => {
      if (this.isGroupWritable()) {
        return true;
      }
    });

    return this.metadata[8] === 'w';
  }

  /**
   * Whether the File is writable by the owner or not.
   *
   * @returns Whether the File is writable by the owner or not.
   */
  public isOwnerWritable(): boolean {
    return this.metadata[2] === 'w';
  }

  /**
   * Whether the File is writable by the group or not.
   *
   * @returns Whether the File is writable by the group or not.
   */
  public isGroupWritable(): boolean {
    return this.metadata[5] === 'w';
  }

  /**
   * Whether the File is executable or not.
   *
   * @returns Whether the File is executable or not.
   */
  public isExecutable(): boolean {
    if (this.owner === State.instance.user) {
      return this.isOwnerExecutable();
    }

    State.instance.user.group.forEach((group) => {
      if (this.isGroupExecutable()) {
        return true;
      }
    });

    return this.metadata[9] === 'x';
  }

  /**
   * Whether the File is executable by the owner or not.
   *
   * @returns Whether the File is executable by the owner or not.
   */
  public isOwnerExecutable(): boolean {
    return this.metadata[3] === 'x';
  }

  /**
   * Whether the File is executable by the group or not.
   *
   * @returns Whether the File is executable by the group or not.
   */
  public isGroupExecutable(): boolean {
    return this.metadata[6] === 'x';
  }

  /**
   * Gets the name of the File.
   *
   * @returns The name of the File.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the root path of the File.
   *
   * @returns The root path of the File.
   */
  public getRootPath(): string {
    if (!this.isRoot()) {
      return this.parent.getFullPath();
    }

    return `/${this.name}`;
  }

  /**
   * Gets the full path of the File.
   *
   * @returns The full path of the File.
   */
  public getFullPath(): string {
    if (this.isRoot()) {
      return `/`;
    }

    if (this.parent) {
      let path = this.parent.getFullPath();
      if (path !== '/') {
        path += '/';
      }
      return `${path}${this.name}`;
    }

    return `${this.name}`;
  }

  /**
   * Gets the path, with `~` for the home directory, of the File, if it is located in the home directory of the provided User
   *
   * @param user The User to check the home directory of.
   * @returns The path of the File.
   */
  public getPathForUser(user: User | undefined = undefined): string {
    if (!user) {
      return this.getFullPath();
    }

    let path = this.getFullPath();

    if (path.startsWith(user.getHome().getFullPath())) {
      path = path.replace(user.getHome().getFullPath(), '~');
    }

    return path;
  }

  /**
   * Gets the children of the File.
   *
   * @returns The children of the File.
   */
  public getChildren(): File[] {
    return this.children;
  }

  /**
   * Gets the child of the File.
   *
   * @param name The name of the child.
   * @returns The child of the File.
   */
  public getChild(name: string): File | undefined {
    return this.children.find((child) => child.name === name);
  }

  /**
   * Adds a child to the File.
   *
   * @param child The child to add.
   */
  public addChild(child: File): void {
    child.setParent(this);
  }

  /**
   * Removes a child from the File.
   *
   * @param child The child to remove.
   */
  public removeChild(child: File): void {
    this.children = this.children.filter((c) => c !== child);
    child.parent = undefined;
  }

  /**
   * Removes a child from the File.
   *
   * @param name The name of the child to remove.
   */
  public removeChildByName(name: string): void {
    let child = this.getChild(name);
    if (child) {
      this.removeChild(child);
    }
  }

  /**
   * Checks if the File has a child.
   *
   * @param name The name of the child.
   * @returns Whether the File has a child or not.
   */
  public hasChild(name: string): boolean {
    return this.children.some((child) => child.name === name);
  }

  /**
   * Checks if the File has children.
   *
   * @returns Whether the File has children or not.
   */
  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  /**
   * Checks if the File is the root.
   *
   * @returns Whether the File is the root or not.
   */
  public isRoot(): boolean {
    return this.parent === undefined;
  }

  /**
   * Checks if the File is a child of the parent.
   *
   * @param parent The parent to check.
   * @returns Whether the File is a child of the parent or not.
   */
  public isChildOf(parent: File): boolean {
    return this.parent === parent;
  }

  /**
   * Checks if the File is a parent of the child.
   *
   * @param child The child to check.
   * @returns Whether the File is a parent of the child or not.
   */
  public isParentOf(child: File): boolean {
    return child.parent === this;
  }

  /**
   * Gets the parent of the File.
   */
  public getParent(): File | undefined {
    return this.parent;
  }

  /**
   * Sets the parent of the File.
   */
  public setParent(parent: File): void {
    this.parent = parent;
    if (!parent.hasChild(this.name)) {
      parent.children.push(this);
    }
  }

  /**
   * Checks if the File is a descendant of the parent.
   *
   * @param parent The parent to check.
   * @returns Whether the File is a descendant of the parent or not.
   */
  public isDescendantOf(parent: File): boolean {
    if (this.parent) {
      return this.parent === parent || this.parent.isDescendantOf(parent);
    }

    return false;
  }

  /**
   * Checks if the File is an ancestor of the child.
   *
   * @param child The child to check.
   * @returns Whether the File is an ancestor of the child or not.
   */
  public isAncestorOf(child: File): boolean {
    return child.isDescendantOf(this);
  }

  /**
   * Gets the depth of the File.
   *
   * @returns The depth of the File.
   */
  public getDepth(): number {
    if (this.parent) {
      return this.parent.getDepth() + 1;
    }

    return 0;
  }

  /**
   * Gets the descendants of the File.
   *
   * @returns The descendants of the File.
   */
  public getDescendants(): File[] {
    let descendants: File[] = [];

    this.children.forEach((child) => {
      descendants.push(child);
      descendants.push(...child.getDescendants());
    });
    
    return descendants;
  }

  /**
   * Gets the ancestors of the File.
   *
   * @returns The ancestors of the File.
   */
  public getAncestors(): File[] {
    const ancestors: File[] = [];

    if (this.parent) {
      ancestors.push(this.parent);
      ancestors.push(...this.parent.getAncestors());
    }

    return ancestors;
  }

  /**
   * Gets all contained Files.
   *
   * @returns All contained Files.
   */
  public getFiles(): File[] {
    return this.getDescendants().filter((child) => !child.isDirectory);
  }

  /**
   * Gets all contained directories.
   *
   * @returns All contained directories.
   */
  public getDirectories(): File[] {
    return this.getDescendants().filter((child) => child.isDirectory);
  }

  /**
   * Gets the size of the File.
   *
   * @returns The size of the File.
   */
  public getSize(): number {
    let size = this.size;
    this.getChildren().forEach((child) => {
      size += child.getSize();
    });

    return size;
  }
}
