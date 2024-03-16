# Brunnerne website

Brunnerne website, created using a heavily modified version of [LiveTerm by Cveinnt](https://github.com/Cveinnt/LiveTerm).

## Writeups

The webpage has a writeup system, that allows for the addition of new writeups through Markdown.

Writeups are located in the `/public/writeups-md` directory, following `/public/writeups-md/<year>/<ctf>/<category>/<writeup>.md` format.

To show it on the website, a key has to be added in the `src/writeups/writeups.json`, following the convention of:
```json
{
  "<year>": {
    "<ctf>": {
      "<category>": [
        "<writeup>"
      ]
    }
  }
}
```

Example naming:
```
/public/writeups-md/2024/kalmarctf/web/badass_server.md
```

```json
{
  "2024": {
    "kalmarctf": {
      "web": [
        "badass_server"
      ]
    }
  }
}
```
