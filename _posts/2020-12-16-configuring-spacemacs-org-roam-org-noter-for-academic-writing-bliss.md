---
title: Configuring Spacemacs org-roam & org-noter for academic writing bliss
tags: research emacs
---

I've always had a decent memory, and so I've never really had a system for
keeping track of who said what and in which paper. When it comes time to write
something of my own I end up mostly just going from memory and
re-google-scholaring things from scratch (often finding later that I already had
that paper in my [Zotero](https://www.zotero.org) database already). As I get
older, though, the memory isn't as sharp, and so it's time to use a more
systematic workflow for writing; keeping notes stuff I've read & linking the
ideas together.

All the cool kids are raving about the [Zettelkasten](https://zettelkasten.de)
method, and in particular the [org-roam](https://www.orgroam.com) package for
this workflow in [Emacs]({{ site.baseurl }}/blog/tag/emacs/). To get the full
experience, there are extensions for managing one's paper library
([org-roam-bibtex](https://github.com/org-roam/org-roam-bibtex)) and
reading/annotating pdf files
([org-noter](https://github.com/weirdNox/org-noter)), which when combined seem
like having academic writing superpowers compared to my "sit around and hope I
remember the reference" approach (see [Noorah Alhasan's EmacsConf 2020
talk](https://emacsconf.org/2020/talks/17/) for some concrete examples).

## Getting it all to play nicely in Spacemacs

[Spacemacs](https://www.spacemacs.org) (currently) has good org-mode support,
but only rudimentary org-roam support, and doesn't include the `org-roam-bibtex`
and `org-noter` extensions. So I spent some time yesterday setting it all up.
There were a couple of
[blog](https://philipperambert.com/Installing-Org-Roam-Bibtex-In-Spacemacs)
[posts](https://www.ianjones.us/org-roam-bibtex) which were helpful, as well as
the GitHub READMEs of the various packages---and you should check them out---but
most only cover _some_ of the parts I wanted (e.g. `org-roam-bibtex` but not
`org-noter`, or have all the parts but for
[doom](https://github.com/hlissner/doom-emacs) rather than Spacemacs). So if
you're trying to do the same thing as me this post will (hopefully) save you
some time.

I'm still tinkering with things, so if you want to see the latest version of my
config then have a look at my public dotfiles repo (especially
[`.spacemacs`](https://github.com/benswift/.dotfiles/blob/master/spacemacs) and
[`ben-utils.el`](https://github.com/benswift/.dotfiles/blob/master/ben-utils.el)).

First, make sure you've got the `org` and `bibtex` layers installed, and you'll
need these extra packages in `dotspacemacs-additional-packages`:

- `org-roam-bibtex`
- `org-noter`
- `org-noter-pdftools`

You'll also need to provide some extra layer `:variables` to the associated layers in
`dotspacemacs-configuration-layers` (you could probably do this in config hooks
or even in `spacemacs/user-config` as well---this is just how I did it).

```emacs-lisp
(bibtex
 :variables
 bibtex-completion-bibliography (expand-file-name "~/Documents/org/zotero.bib")
 org-ref-default-bibliography (list bibtex-completion-bibliography) ;; *must* be a list
 org-ref-get-pdf-filename-function #'org-ref-get-pdf-filename-helm-bibtex)

(org
 :variables
 org-directory (expand-file-name "~/Documents/org")
 org-default-notes-file (concat org-directory "/inbox.org")
 ;; org-roam
 org-enable-roam-support t
 org-roam-directory (concat org-directory "/roam")
 org-roam-db-location (concat org-roam-directory "/db/org-roam.db"))
```

Finally, since `org-roam-bibtex`, `org-noter` and `org-noter-pdftools` aren't
Spacemacs layers (they're just additional packages) you need to provide some
extra configuration in `spacemacs/user-config` to hook it all together. For
convenience I put it in a separate `.el` file which I load from
`spacemacs/user-config`.

```emacs-lisp
(use-package org-roam-bibtex
  :after org-roam
  :hook (org-roam-mode . org-roam-bibtex-mode)
  :custom
  (orb-preformat-keywords '("citekey" "title" "url" "author-or-editor" "keywords" "file"))
  (orb-process-file-keyword t)
  (orb-file-field-extensions '("pdf" "epub" "html"))

  (orb-templates
   '(("r" "ref" plain (function org-roam-capture--get-point)
      ""
      :file-name "${citekey}"
      :head "#+TITLE: ${citekey}: ${title}
#+ROAM_KEY: ${ref}

- tags ::
- keywords :: ${keywords}

* ${title}
  :PROPERTIES:
  :Custom_ID: ${citekey}
  :URL: ${url}
  :AUTHOR: ${author-or-editor}
  :NOTER_DOCUMENT: ${file}
  :NOTER_PAGE:
  :END:"))))

(use-package org-pdftools
  :hook (org-load . org-pdftools-setup-link))

(use-package org-noter
  :after (:any org pdf-view)
  :custom (org-noter-always-create-frame nil))

(use-package org-noter-pdftools
  :after org-noter
  :config
  (with-eval-after-load 'pdf-annot
    (add-hook 'pdf-annot-activate-handler-functions #'org-noter-pdftools-jump-to-note)))
```

Once I've used this system a bit longer and ironed out any kinks I might submit
a dedicated `org-roam-bibtex` layer to Spacemacs (or add it to the `org` layer).
But for now I'll just leave it here in case any other Spacemacs users are
wondering how I did it.
