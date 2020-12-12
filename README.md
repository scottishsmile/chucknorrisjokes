# chucknorrisjokes
Chuck Norris Jokes API front end - javascript, html ,css, ajax

The chuck norris jokes API (https://api.chucknorris.io/) provides  a list of jokes when queried by a Get request.

I used JavaScript to create a webpage that allows the user to enter a number of jokes, that number is amended to the GET request url and sent to the API.

AJAX is used to update the webpage with the jokes, that way we don't need to reload it.

User input is validated - Can't request more than 30 jokes. Input is checked for SQL code to prevent injection. No negative numbers allowed.
