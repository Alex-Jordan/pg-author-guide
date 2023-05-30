var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section-hello-world",
  "level": "1",
  "url": "section-hello-world.html",
  "type": "Section",
  "number": "1",
  "title": "Hello World!",
  "body": " Hello World!  Here is a very basic Hello World! PG problem. It does nothing except print Hello World! .   Hello World!   DOCUMENT(); loadMacros( \"PGstandard.pl\", \"PGML.pl\" ); BEGIN_PGML Hello World! END_PGML ENDDOCUMENT();      Hello World!       Note the file starts with DOCUMENT(); and ends with ENDDOCUMENT(); . The loadMacros() command is loading two fundamnetal macro libraries you will almost always want to load. Thee problem statement itself is in between BEGIN_PGML and END_PGML .  "
},
{
  "id": "listing-1",
  "level": "2",
  "url": "section-hello-world.html#listing-1",
  "type": "Listing",
  "number": "1.1",
  "title": "",
  "body": " Hello World!   DOCUMENT(); loadMacros( \"PGstandard.pl\", \"PGML.pl\" ); BEGIN_PGML Hello World! END_PGML ENDDOCUMENT();   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-hello-world.html#exercise-1",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Hello World!      "
},
{
  "id": "section-numerical-answers",
  "level": "1",
  "url": "section-numerical-answers.html",
  "type": "Section",
  "number": "2",
  "title": "Numerical Answers",
  "body": " Numerical Answers  This exercise asks you to add two integers.   Add Integers   DOCUMENT(); loadMacros( \"PGstandard.pl\", \"PGML.pl\" ); BEGIN_PGML What is [`2 + 2`]? [_]{4}{5} END_PGML ENDDOCUMENT();      What is ?            Note the math content is inside [` ... `] delimiters. The answer blank is created with [_] . Then the {4} declares the answer. And finally, the {5} is an optional argument to declare the width of the answer blank in output formats where the width is not dynamic.  "
},
{
  "id": "listing-2",
  "level": "2",
  "url": "section-numerical-answers.html#listing-2",
  "type": "Listing",
  "number": "2.1",
  "title": "",
  "body": " Add Integers   DOCUMENT(); loadMacros( \"PGstandard.pl\", \"PGML.pl\" ); BEGIN_PGML What is [`2 + 2`]? [_]{4}{5} END_PGML ENDDOCUMENT();   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-numerical-answers.html#exercise-2",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  What is ?           "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
