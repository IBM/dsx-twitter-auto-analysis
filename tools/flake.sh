#!/bin/bash
#
# Use jupyter nbconvert to get a Python (script) version of the notebook.
# Run flake8 on the script.
#
# This script is useful to figure out CI pep8 errors. Use this and the
# flake.out file to understand the line numbers.

jupyter nbconvert notebooks/*.ipynb --stdout --to script | sed 's/^get_ipython.*$/# noqa/' > flake.out

flake8 --ignore=F401,F404,E402,E703,E712,W291,W293 flake.out

## Single command version similar to what we use in CI. Exclusions vary.
# jupyter nbconvert notebooks/*.ipynb --stdout --to script | flake8 - -v --ignore=W391

