import File from '@utils/structure/File';
import BrunnerUser from '@utils/structure/Users/BrunnerUser';
import CTFs from '@writeups/writeups.json';

export default class writeups extends File {
  public static readonly instance = new writeups();

  public name = 'writeups';
  public metadata = 'drwxr-xr-x';
  public owner = BrunnerUser.instance;
  public group = BrunnerUser.instance.group[0];

  protected constructor() {
    super();

    // Load all writeups
    for (const year in CTFs) {
      this.linkChildren([
        new (class extends File {
          public name = year;
          public metadata = 'drwxr-xr-x';
          public owner = BrunnerUser.instance;
          public group = BrunnerUser.instance.group[0];

          public constructor() { // Change protected to public
            super();

            for (const ctf in CTFs[year]) {
              this.linkChildren([
                new (class extends File {
                  public name = ctf;
                  public metadata = 'drwxr-xr-x';
                  public owner = BrunnerUser.instance;
                  public group = BrunnerUser.instance.group[0];

                  public constructor() { // Change protected to public
                    super();

                    for (const category in CTFs[year][ctf]) {
                      this.linkChildren([
                        new (class extends File {
                          public name = category;
                          public metadata = 'drwxr-xr-x';
                          public owner = BrunnerUser.instance;
                          public group = BrunnerUser.instance.group[0];

                          public constructor() { // Change protected to public
                            super();

                            for (const writeup of CTFs[year][ctf][category]) {
                              this.linkChildren([
                                new (class extends File {
                                  public name = writeup + '.md';
                                  public metadata = '-rwxr-xr-x';
                                  public owner = BrunnerUser.instance;
                                  public group = BrunnerUser.instance.group[0];

                                  public constructor() { // Change protected to public
                                    super();

                                    this.content = "Loading content...";

                                    this.size = Math.floor(Math.random() * 10000);
                                  }

                                  async read() {
                                    if (this.content !== "Loading content...") {
                                      return this.content;
                                    }

                                    this.content = "Find this writeup at <a href='/writeups/" + year + "/" + ctf + "/" + category + "/" + writeup + "'>/writeups/" + year + "/" + ctf + "/" + category + "/" + writeup + "</a> <br>";

                                    const res = await fetch(`/writeups-md/${year}/${ctf}/${category}/${writeup}.md`)

                                    if (!res.ok) {
                                      this.content = "*Could not load writeup*";
                                      return;
                                    }

                                    this.content += await res.text();

                                    return this.content;
                                  }

                                  public getSize(): number {
                                    return this.size;
                                  }
                                })()
                              ]);
                            }
                          }
                        })()
                      ]);
                    }
                  }
                })()
              ]);
            }
          }
        })
      ]);
    }
  }
}
