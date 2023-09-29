import File from "../../utils/structure/File";
import State from "../../utils/structure/State";
import RootUser from "../../utils/structure/Users/RootUser";

export default class group extends File {
    public static readonly instance = new group();

    public name: string = 'group';
    public metadata = '-rw-r--r--';
    public owner = RootUser.instance;
    public group = RootUser.instance.group[0];

    protected content = '';
    public size = this.content.length;

    async read(): Promise<string> {
        if (this.content.length === 0) {
            this.generateContent()
        }

        return this.content;
    }

    public getSize(): number {
        if (this.content.length === 0) {
            this.generateContent()
        }

        return this.size;
    }

    private generateContent(): void {
        let content = '';

        for (const group of State.instance.groups) {
            let groupMembers = group.members.map(member => member.username).join(',');

            content += `${group.name}:x:${group.id}:${groupMembers}\n`;
        }

        this.content = content;
        this.size = content.length;
    }
}
