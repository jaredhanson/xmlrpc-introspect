SOURCES = *.js
TESTS = test/*.test.js


# ==============================================================================
# Browser Tests
# ==============================================================================

CHROME = open -a "Google Chrome"
FIREFOX = open -a "Firefox"
SAFARI = open -a "Safari"
PHANTOMJS = phantomjs

MOCHA_PHANTOMJS = ./node_modules/.bin/mocha-phantomjs
WWW_TESTS = test/www/index.html


test: test-phantomjs

test-chrome: test/www/js/lib
	$(CHROME) $(WWW_TESTS)

test-firefox: test/www/js/lib
	$(FIREFOX) $(WWW_TESTS)

test-safari: test/www/js/lib
	$(SAFARI) $(WWW_TESTS)

test-phantomjs: test/www/js/lib
	$(MOCHA_PHANTOMJS) $(WWW_TESTS)

# Prior to running tests on Sauce Labs, ensure that a local server is listening
# and Sauce Connect is tunneling requests to it.
#
#     $ java -jar Sauce-Connect.jar $SAUCE_LABS_USERNAME $SAUCE_LABS_ACCESS_KEY
#     $ node test/cloud/server.js
#
test-cloud: test-saucelabs
test-saucelabs:
	clear && node test/cloud/terminal.js

test/www/js/lib:
	cd test/www && volo add 


# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test test-chrome test-firefox test-safari test-phantomjs test-cloud test-saucelabs hint lint
