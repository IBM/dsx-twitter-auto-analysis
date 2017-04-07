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

from builtins import str
import copy
import datetime
import mock
import sys
from unittest import TestCase

TEST_FOLLOWERS_COUNT = 543234
TEST_FRIENDS_COUNT = 634
TEST_BODY = 'This is a tweet body test 4 u #trendthis'
TEST_ID = 'test-tweet-id'
TEST_SENTIMENT = 'test-tweet-sentiment'
TEST_GENDER = 'test-tweet-gender'
TEST_COUNTRY = 'test-tweet-country'
TEST_YEAR = '2017'
TEST_MONTH = '01'
TEST_DAY = '23'
TEST_TIME = '{}-{}-{} 12:34:56.789'.format(TEST_YEAR, TEST_MONTH, TEST_DAY)
TEST_LONGITUDE = '12.345'
TEST_LATITUDE = '98.765'
TEST_POSITION = 'pos ({} {})'.format(TEST_LONGITUDE, TEST_LATITUDE)
TEST_ROW = type('TestRow', (object,), {'MESSAGE_LOCATION': TEST_POSITION,
                                       'MESSAGE_POSTED_TIME': TEST_TIME,
                                       })()
TEST_TWEET = type('TestTweet', (object,), {
    'USER_FOLLOWERS_COUNT': TEST_FOLLOWERS_COUNT,
    'USER_FRIENDS_COUNT': TEST_FRIENDS_COUNT,
    'MESSAGE_BODY': TEST_BODY,
    'MESSAGE_ID': TEST_ID,
    'SENTIMENT': TEST_SENTIMENT,
    'USER_GENDER': TEST_GENDER,
    'USER_COUNTRY': TEST_COUNTRY,
    'POSTING_TIME': TEST_TIME,
})()

# Mock most libraries. We aren't testing them.
sys.modules['matplotlib'] = mock.Mock()
sys.modules['matplotlib.pyplot'] = mock.MagicMock()
sys.modules['pyspark'] = mock.Mock()
sys.modules['pyspark.sql'] = mock.MagicMock()
sys.modules['pyspark.sql.functions'] = mock.Mock()
sys.modules['pyspark.sql.types'] = mock.Mock()
sys.modules['wordcloud'] = mock.Mock()

# Mock enough pyplot for the script code to execute
import matplotlib.pyplot as plt  # noqa
plt.subplots.return_value = (mock.MagicMock(), mock.MagicMock())
params = mock.Mock()
params.get_size_inches.return_value = (1, 2)
plt.gcf.return_value = params

# Mock enough NumPy for the script code to execute
import numpy as np  # noqa
np.add = mock.Mock()
np.subtract = mock.Mock()

# Mock enough wordcloud for the script code to execute
import wordcloud  # noqa
wordcloud.STOPWORDS = []

from . import sourcecode as nb  # nb is our notebook's testable Python code


class TestDsxTwitterAutoAnalysis(TestCase):

    def test_hasWord(self):
        self.assertTrue(nb.hasWord('message with foo in it', 'foo'))
        self.assertFalse(nb.hasWord('message without', 'foo'))

    def test_checkCarMaker(self):
        expected = [True, False, True, True, False, True]
        actual = nb.checkCarMaker('Test with gm, ford, vw, bmw and tesla')
        self.assertEqual(expected, actual)

    def test_addMissingDates(self):
        base = mock.Mock()
        base.iterrows.return_value = []
        checked = mock.MagicMock()
        expected = checked.copy().sort_values()

        actual = nb.addMissingDates(base, checked)

        self.assertEqual(expected, actual)

    def test_getLongitudeLatitude(self):
        actual = nb.getLongitudeLatitude(TEST_POSITION)
        self.assertEqual([TEST_LONGITUDE, TEST_LATITUDE], actual)

    def test_getLongitudeLatitude_except(self):
        self.assertRaises(
            IndexError, nb.getLongitudeLatitude, 'bogus')

    def test_getLongitude(self):
        actual = nb.getLongitude(TEST_ROW)
        self.assertEqual(float(TEST_LONGITUDE), actual)

    def test_getLongitude_none(self):
        bad_row = copy.copy(TEST_ROW)
        bad_row.MESSAGE_LOCATION = None
        actual = nb.getLongitude(bad_row)
        self.assertIsNone(actual)

    def test_getLongitude_except(self):
        bad_row = copy.copy(TEST_ROW)
        bad_row.MESSAGE_LOCATION = 'bogus'
        actual = nb.getLongitude(bad_row)
        self.assertIsNone(actual)

    def test_getLatitude(self):
        actual = nb.getLatitude(TEST_ROW)
        self.assertEqual(float(TEST_LATITUDE), actual)

    def test_getLatitude_none(self):
        bad_row = copy.copy(TEST_ROW)
        bad_row.MESSAGE_LOCATION = None
        actual = nb.getLatitude(bad_row)
        self.assertIsNone(actual)

    def test_getLatitude_except(self):
        bad_row = copy.copy(TEST_ROW)
        bad_row.MESSAGE_LOCATION = 'bogus'
        actual = nb.getLatitude(bad_row)
        self.assertIsNone(actual)

    def test_getDateIgnoreTime(self):
        expected = datetime.datetime(
            int(TEST_YEAR), int(TEST_MONTH), int(TEST_DAY),
            hour=0, minute=0, second=0, microsecond=0)
        actual = nb.getDateIgnoreTime(TEST_ROW)
        self.assertEqual(expected, actual)

    def test_getInfluence(self):
        expected = (TEST_FOLLOWERS_COUNT + TEST_FRIENDS_COUNT) / 2
        actual = nb.getInfluence(TEST_TWEET)
        self.assertEqual(expected, actual)

    def test_getAllAttributes(self):
        expected = [TEST_ID, TEST_BODY, TEST_SENTIMENT, TEST_GENDER,
                    str(TEST_COUNTRY).upper(),
                    TEST_TIME,
                    nb.getInfluence(TEST_TWEET)]
        num = nb.num_car_makers
        expected.extend([False] * num)

        actual = nb.getAllAttributes(TEST_TWEET)

        self.assertEqual(expected, actual)

    def test_getInsights_Influence_empty(self):
        df = mock.MagicMock()
        num = nb.num_car_makers
        expected = [df.filter().select().toPandas()] * num

        actual = nb.getInsights_Influence(df, nb.car_makers_name_list)

        self.assertEqual(expected, actual)
        self.assertEqual(num, df.__getitem__.call_count)
        self.assertEqual(
            [mock.call(x) for x in nb.car_makers_name_list],
            df.__getitem__.call_args_list)

    def test_getListForCountry_empty(self):
        actual = nb.getListForCountry(mock.MagicMock(),
                                      'PRINCIPALITY OF SEALAND')
        self.assertEqual([0], actual)

