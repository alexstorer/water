#!/bin/bash

#cd /afs/.ir/users/a/s/astorer/WWW/water; python get_reservoir.py; python build_page.py;

# activate venv
source venv/bin/activate
python3 get_reservoir_md.py
python3 get_reservoir.py
python3 build_page.py
python3 -m http.server