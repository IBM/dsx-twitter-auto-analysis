/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.IFrameListenerPreview = (function () {
  'use strict';

  var _iFrameLoaded = false;

  function _setIFrameLoaded() {
    _iFrameLoaded = true;
  }

  function _isIFrameLoaded() {
    return _iFrameLoaded;
  }

  return {
    isIFrameLoaded: _isIFrameLoaded,
    setIFrameLoaded: _setIFrameLoaded
  };

})();
