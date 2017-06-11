default: start

start:
	pm2 start pm2.json
	sudo ../../../xampp startapache
	make tests
	open http://localhost/dev/VueForum/dist/

kill:
	pm2 delete all
	sudo ../../../xampp stopapache
	rm -rvf dist

tests:
	node_modules/.bin/mocha

lint:
	gulp Lint

restart:
	make kill
	make start
