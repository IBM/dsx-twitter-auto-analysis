Troubleshooting
===============

Jupyter Notebooks
-----------------

* Set ``DEBUG = True`` in the cell near the top. Run that cell and then re-run
  cells as needed to get more printed output.
* Make sure the pip install ran correctly. You might need to restart the
  kernel and run the cells from the top after the pip install runs the first
  time. Run the cell after the pip install with ``DEBUG = True`` to see the status.
* Many of the cells rely on variables that are set in earlier cells. Some of these
  are cleared in later cells. Start over at the top when troubleshooting.

Loading Tweets
--------------

* The query captures alternative spellings of car manufactures. For example,
  Volkswagen and VW.
* The query does not filter out alternative meanings of a car model abbreviation.
  For example, GM can mean General Motors and Good Morning.
* The query above will produce around 5 million tweets which results in delays
  loading the data. You can limit the size of the data set by adding more filter
  constraints. For example:
  ``posted:2015-01-01,2015-12-31 friends_count:5000 followers_count:5000 ``
  ``listed_count:5000 is:verified (sentiment:positive OR sentiment:negative OR ``
  ``sentiment:ambivalent) (volkswagen OR vw OR toyota OR daimler OR mercedes OR ``
  ``bmw OR gm OR "general motors" OR tesla)``
