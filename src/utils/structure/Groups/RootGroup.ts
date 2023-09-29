import Group from "../Group";

export default class RootGroup extends Group {
    public static readonly instance = new RootGroup();

    public id = 0;
    public name = 'root';
}