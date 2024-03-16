import Group from "../Group";

export default class VisitorGroup extends Group {
    public static readonly instance = new VisitorGroup();

    public id = 1001;
    public name = 'visitor';
}