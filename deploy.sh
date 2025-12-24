#!/bin/bash

#cd /afs/.ir/users/a/s/astorer/WWW/water; python get_reservoir.py; python build_page.py;

# activate venv
source venv/bin/activate
python3 get_reservoir_md.py
python3 get_reservoir.py
python3 build_page.py
# find all the files in site/ and strip the leading directory names
# make sure to remove filelist.txt if it exists
rm -f site/filelist.txt
find site/ -type f | sed 's|^site/||' > site/filelist.txt
cd site && python3 -m http.server