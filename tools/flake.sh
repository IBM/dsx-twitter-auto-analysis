#!/bin/bash

# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

# Use jupyter nbconvert to get a Python (script) version of the notebook.
# Run flake8 on the script.
#
# This script is useful to figure out CI pep8 errors. Use this and the
# flake.out file to understand the line numbers.
#
# params: $1 the notebook(s) to process

if [ -z "$1" ]; then
   echo "Usage: flake.sh <notebook(s)>"
   exit 1
fi

# Note: Compare the sed and the ignore list to the ones in .travis.yml.

jupyter nbconvert $1 --stdout --to script | sed 's/^get_ipython.*$/# noqa/' > flake.out

flake8 --ignore=E703,E712,W291,W293 flake.out
