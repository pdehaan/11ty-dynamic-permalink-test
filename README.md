# 11ty-dynamic-permalink-test

Setting permalinks using a directory data file.

## WHAT

Shows how we can use a subdirectory with an Eleventy [directory data file](https://www.11ty.dev/docs/data-template-dir/) to customize permalinks in our site to write out as /index.html, /otherpage.html, /somepage.html, instead of the default /otherpage/index.html.

Here's our input directory structure:

```sh
> tree src

src/
└── pages/
    ├── index.njk
    ├── otherpage.njk
    ├── pages.11tydata.json
    └── somepage.njk

1 directory, 4 files
```

And running <kbd>npm run build</kbd> (which calls `eleventy`), we get the following output directory file structure:

```sh
> tree www

www/
├── index.html
├── otherpage.html
└── somepage.html

0 directories, 3 files
```

## HOW

The magic happens in the [src/pages/pages.11tydata.json](src/pages/pages.11tydata.json) file, which sets the permalink structure for the entire directory, instead of needing to set it on each file individually:

```json
{
  "permalink": "{{ page.fileSlug }}.html"
}
```
