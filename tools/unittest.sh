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
#
# Use jupyter nbconvert to get a Python (script) version of the notebook.
# Run unittests by importing the script.

# Note: The template file is assumed to be ran from the tools directory.

jupyter nbconvert ../notebooks/dsx_twitter_auto_analysis.ipynb --stdout \
    --to script | sed \
    -e 's/DEBUG = False/DEBUG = True/' \
    -e 's/^get_ipython/# get_ipython/' \
    -e 's/SQLContext(sc)/SQLContext("SC")/' \
    -e 's/captured_io()/"[...captured_io replaced...]"/' \
    | grep -v -e "^#" \
    > ../tests/unit/sourcecode.py

py.test --cov=../tests/unit ../tests/unit
