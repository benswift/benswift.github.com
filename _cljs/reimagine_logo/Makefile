SRCFILE=src/reimagine_logo/core.cljs
OUTFILE=../../assets/js/reimagine-logo.js

all: $(OUTFILE)

$(OUTFILE): $(SRCFILE) deps.edn build.edn
	clojure --main cljs.main --compile-opts build.edn --compile

.PHONY: clean
clean:
	rm $(outfile)
