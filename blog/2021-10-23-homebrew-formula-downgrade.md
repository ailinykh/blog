---
slug: homebrew-formula-downgrade
title: Homebrew package version downgrade
authors: [anton]
tags: [homebrew, package, formula, rollback, guide]
---

Nowadays rollback to any particular version of the Homebrew package might be tricky since the commands `brew versions <package>` and `brew switch <package> <version>` are deprecated and no more available.

<!--truncate-->

First, you should check if any other versions are available for your package:
```bash
admin@macos ~ % brew search python
==> Formulae
app-engine-python          python-launcher            python@3.8
boost-python               python-markdown            python@3.9 ✔
boost-python3              python-tabulate            reorder-python-imports
bpython                    python-tk@3.10             wxpython
gst-python                 python-tk@3.9              pythran
ipython                    python-yq                  jython
micropython                python@3.10                cython
ptpython                   python@3.7
==> Casks
awips-python                             mysql-connector-python

If you meant "python" specifically:
It was migrated from homebrew/cask to homebrew/core.
```
if so, the necessary version could be installed right from the repo:
```bash
admin@macos ~ % brew install python@3.10
admin@macos ~ % brew link python@3.10
admin@macos ~ % python3 --version                                                               
Python 3.10.0

admin@macos ~ % 
```
if not, there are two more ways to achieve that.

## Install using remote tap
You should find the correct Formula file at github.com

Let's say you are trying to downgrade the `git-lfs` package. In this case, you should follow these steps:
1. Go to https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/git-lfs.rb
2. In the top right corner find the __History__ button
3. Find commit with the version you need
4. Choose __View file__ from the menu
5. Click __Raw__ button
6. That is it! You've got the Url: https://raw.githubusercontent.com/Homebrew/homebrew-core/43842898fd3ff43273466052722f5ba2789196cb/Formula/git-lfs.rb

or just by using `git log git-lfs` command:
```bash {19}
admin@macos ~ % brew log git-lfs
commit be2109eae9e1043ddb78e593a8a05d568917ca95
Author: BrewTestBot <1589480+BrewTestBot@users.noreply.github.com>
Date:   Wed Sep 29 02:14:15 2021 +0000

    git-lfs: update 3.0.1 bottle.

commit 1c4607366f2c5d85c2efa803556f51a6709987f0
Author: Rui Chen <rui@chenrui.dev>
Date:   Tue Sep 28 18:48:26 2021 -0400

    git-lfs 3.0.1
    
    Closes #86082.
    
    Signed-off-by: Thierry Moisan <thierry.moisan@gmail.com>
    Signed-off-by: BrewTestBot <1589480+BrewTestBot@users.noreply.github.com>

commit 43842898fd3ff43273466052722f5ba2789196cb
Author: Michael Cho <20700669+cho-m@users.noreply.github.com>
Date:   Wed Jul 7 01:55:56 2021 +0000

    git-lfs: update 2.13.3 bottle.
```
here is the 2.13.3 version commit hash `43842898fd3ff43273466052722f5ba2789196cb` and it can be put info __raw__ GitHub url:
```bash
https://raw.githubusercontent.com/Homebrew/homebrew-core/<COMMIT ID>/Formula/git-lfs.rb
```
:::note
In different guides across the internet you may see the following command:
```bash
admin@macos ~ % brew install <url>
```
It's also [__deprecated__](https://brew.sh/2020/05/29/homebrew-2.3.0/#:~:text=brew%20install%20from%20a%20URL,beginning%20installation%20or%20locking%20dependencies.) and __not working__ anymore
:::

Now all you need is to put this file into your own "tap" (repository) on a GitHub and install it using homebrew:
```bash
admin@macos ~ % brew unlink git-lfs
admin@macos ~ % brew install <user>/<repo>/git-lfs
```
## Install using local tap and brew extract
Another way is to create a local tap and then `extract` the needed version into it:
```bash
admin@macos ~ % brew tap-new $USER/local-git-lfs
Initialized empty Git repository in /usr/local/Homebrew/Library/Taps/admin/homebrew-local-git-lfs/.git/
```
this one creates a new local tap inside your local Homebrew repo.
:::note
Use `brew --repository` command to find Homebrew's root location
:::
After that you can `extract` the correct version into this new tap
```bash
admin@macos ~ % brew extract --version 2.13.3 git-lfs $USER/local-git-lfs
```
and the last step is to install this version as usual:
```bash
admin@macos ~ % brew unlink git-lfs # in case of another version installed
admin@macos ~ % brew install git-lfs@2.13.3
```