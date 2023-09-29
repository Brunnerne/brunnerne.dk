import State from "./State";
import User from "./User";

export default abstract class Group {
    public static readonly instance: Group;

    /**
     * The id of the Group.
     */
    public abstract id: number;

    /**
     * The name of the Group.
     */
    public abstract name: string;

    /**
     * The members of the Group.
     */
    public members: User[] = [];

    protected constructor() {
        this.register();
    }

    /**
     * register group in system
     */
    public register(): void {
        setTimeout(() => {
            if (!State.instance.groups.includes(this)) {
                State.instance.groups.push(this);
            }
        }, 10);
    }
}