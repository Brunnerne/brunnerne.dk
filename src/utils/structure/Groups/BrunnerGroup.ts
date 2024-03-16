import Group from "../Group";

export default class BrunnerGroup extends Group {
    public static readonly instance = new BrunnerGroup();

    public id = 1000;
    public name = 'brunner';
}