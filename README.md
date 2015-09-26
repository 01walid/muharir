# muharir (experimental) 
A simple Markdown editor for RTL languages based on [CodeMirror](https://github.com/codemirror/CodeMirror) and some of Github's Flavored Markdown specs.

Muharir (editor in Arabic), performs Markdown rendering as you type, with some special handling for inline code and code blocks so they always render LTR.

**Demo**: [test it online](http://01walid.github.io/muharir/)

## Notes:
- the `direction` branch of [CodeMirror](https://github.com/codemirror/CodeMirror)'s repo is used instead of the `master` branch, as it better handles cursor movements on RTL layouts.
- there's some issues with cursor movements on code blocks but it's basically usable.


## LICENSE
MIT.
