import Group from "../Group";

export default class VisitorGroup extends Group {
    public static readonly instance = new VisitorGroup();

    public id = 1000;
    public name = 'visitor';
}