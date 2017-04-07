#!/bin/bash
#
# export_md.sh: Use jupyter nbconvert and a local template to
#               produce a markdown report w/o code cells.
#
# params: $1: the *.ipynb to export
#
# Note: The template file is assumed to be in the current directory
#       but you can refer to a notebook elsewhere. The ouput file
#       and dir full of charts and stuff will be created where the
#       notebook is.

jupyter nbconvert --template nocode.tplx --to markdown $1

