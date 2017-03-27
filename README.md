[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ibm/dsx-twitter-auto-analysis)

Twitter Analysis with Jupyter Notebooks
=======================================

# Twitter Sentiment Analysis with DSX

A developer journey using Jupyter Notebooks in IBM Data Science Experience (DSX)
to analyze Twitter sentiments.

# Introduction

In this developer journey you will use notebooks to analyze Twitter data and
extract interesting insights from tweets. You you will easily perform complex
computations on a large amount of data in a notebook by using SparkContext,
which enables you to run tasks on the Spark cluster. In addition, you will
integrate data from dashDB using the Spark connector and use Spark and pandas
DataFrames.

What does it use?
-----------------
* Jupyter Notebooks
* Python programming language
* Pandas (Python Data Analysis Library)
* IBM Data Science Experience
* IBM Insights for Twitter
* IBM dashDB for Analytics
* IBM Analytics for Apache Spark 

Intended audience
-----------------

Application developers who need to efficiently build powerful data
visualizations, but who may not have an abundance of time, data science
experience or a dedicated data science team who could take ownership of
such an effort.

Setup
-----

1. Ensure you have a [Bluemix](http://bluemix.net) account.

2. Log into [IBM's Data Science Experience](http://datascience.ibm.com/)

  By signing up for the Data Science Experience, two services: ``DSX-Spark`` and ``DSX-ObjectStore`` will be created in your bluemix account.

  <div style="text-align:center"><img src="doc/source/images/dsx_free_trial.png" width="50%" align="middle"></div>

  <div style="text-align:center"><img src="doc/source/images/dsx_sign_up.png" width="50%" align="middle"></div>

3. Create various Bluemix services

  * Create a [**dashDB for Analytics**](https://console.ng.bluemix.net/catalog/services/dashdb-for-analytics) service

    <img src="doc/source/images/dashdb_service.png">

  * Create an [**Insights for Twitter**](https://console.ng.bluemix.net/catalog/services/insights-for-twitter) service

    <img src="doc/source/images/twitter_service.png">

4. Load tweets into dashDB

  The first step in the analysis process is to harvest the Twitter data.
In this sample, we use the dashDB connector to the IBM Insights for Twitter
service to seamlessly specify a filter query (tweeets about the six leading car
manufacturers in 2015) and load the results into dashDB. This specific time frame
and filter are being used to demonstrate analysis of a known Twitter spike.

  * Launch dashDB
  * From the menu on the left, choose Load > Load Twitter Data
  * **Connect to Twitter**: Select the existing **dashDB** service you created earlier
    and select Next

    <img src="doc/source/images/twitter_step1.png">

  * **Search**: In the Search for Twitter data box, enter the query below and
    retrieve a sampling of tweets. Once loaded, click Next:
    ``posted:2015-01-01,2015-12-31 followers_count:2000 listed_count:1000 ``
    ``(volkswagen OR vw OR toyota OR daimler OR mercedes OR bmw OR gm OR ``
    ``"general motors" OR tesla)``

    <img src="doc/source/images/twitter_step2.png">

  * **Select table**: In the *Load the data into new tables with this prefix* field,
    enter any text you wish for a namespace and click Next.

    <img src="doc/source/images/twitter_step3.png">

  * **Load data**: This step can take up to 20 minutes, dashDB shows you progress
    as the tweets load. When the data finishes loading, click Next.

    <img src="doc/source/images/twitter_step4.png">

  * **Load complete**: Peruse the reports that dashDB shows.

    <img src="doc/source/images/twitter_step5.png">

5. Analyze in Jupyter Notebook

The sample is structured into different sections. In the first sections, you will perform a general analysis on data set then you will go deeper in the analysis to gain meaningful insights about manufacturers.
Learning goals:

1. Determine the countries with the highest number of tweets (based on the user profile information).
1. Analyze tweet sentiments
1. Draw insights from tweets about major car manufacturers worldwide by combining Twitter timeline analysis with sentiment, gender distribution and location distribution.

Running the Notebook
--------------------

### Create a notebook in DSX
Use the menu on the left to select "My Projects" and then "Default Project".
Click on "add notebooks" (upper right) to create a notebook.

* Select the "From File" tab.
* Enter a name for the notebook.
* Optionally, enter a description for the notebook.
* Hit "Choose File" and navigate to the notebooks/dsx_twitter_analysis.ipynb file
    * The choose file instructions assume you have a local git clone of the repo.
    * TODO: Use the "From URL" tab instead with a public repo URL
* Use the "Spark Service" pulldown to select your "DSX-Spark" service.

### Important steps to running notebook successfully:
At the top of the notebook, provide your dashDB info.

* Make sure you update SCHEMA and PREFIX with values you set when importing Twitter data into dashDB.
* Use uname/password/jdbcurl from dashDB "Service Credentials" tab in BlueMix.
  You will have to create your own credentials using the "New Credential" option.
  Normally these would be generated/found in the DSX Connect panel, but this
  is not the case if you are using the entry (i.e. free) version of dashDB. 

### Analyzing tweets

In this notebook sample, you will use SparkContext which enables you to run tasks on the Spark cluster. Using Spark in notebooks enables you to analyze large amounts of data very efficiently. The sample begins with basic analysis steps which slowly progress into deeper analytic work. In this Notebook, we will analyze the loaded data to extract interesting insights and plots from it. This analysis is performed using SparkContext which enables us to run tasks on spark cluster. Using spark and notebooks is a very strong combination. It enables you to analyze big amount of data very efficiently. We will start with some basic analysis then go deeper gradually.

### Notebook structure

1. Importing libraries
1. Defining global variables and helper functions
1. Acquiring the data
1. Transforming the data
1. Determining the distribution of tweets across geographies
1. Analyzing tweet sentiments
1. Analyzing Twitter timelines
1. Drawing insights from tweets about car manufacturers
1. Summary

### How to execute the steps in your notebook:

When a notebook is executed, what is actually happening is that each code cell in the notebook is executed, in order, from top to bottom.

Each code cell is selectable and is preceded by a tag in the left margin. The tag format is “In [x]:”. Depending on the state of the notebook, the “x” can be:

* A blank, This indicates that the cell has never been executed.
* A number. This number represents the relative order this code step was executed.
* An “*”. This indicates that the cell is current executing.

There are several ways to execute the code cells in your notebook:

* One cell at a time.
    * Select the cell, and then press the “play” button in the toolbar.
* Batch mode, in sequential order.
    * From the “Cell” menu bar, there are several options available. For example, you can “Run All” cells in your notebook, or you can “Run All Below”, that will start executing from the first cell under the currently selected cell, and then continue executing all cells that follow.
* At a scheduled time.
    * Press the “Schedule” button located in the top right section of your notebook panel. Here you can schedule your notebook to be executed once at some future time, or repeatedly at your specified interval.

### How to save your work:

Under the “File” menu, there are several ways to save your notebook:

* “Save Version” will save your current state of your notebook with a version tag that contains a date and time stamp. Up to 10 versions of your notebook can be saved, each one retrievable by selecting the “Revert To Version” menu item.
* “Save” will simply save the current state of your notebook, without any version information.

### How to share your work:

You can share your notebook by selecting the “Share” button located in the top right section of your notebook panel. The end result of this action will be a URL link that will display a “read-only” version of your notebook. You have several options to specify exactly what you want shared from your notebook:

* “Only text and output” - this option will remove all code cells from the notebook view.
* “All content excluding sensitive code cells” - this option will remove any code cells
  that contain a “sensitive” tag. For example, "# @hidden_cell" is used to protect
  your dashDB credentials from being shared.
* “All content, including code” - this option displays the notebook as is.
* A variety of "download as" options are also availble in the menu.
