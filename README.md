# 6element

6element is a open innovation project of waste optimisation. **[Learn more](http://ants.builders/pages/6element.html)**


## Getting started :

put your datafiles in `data`.

then watch the change in your frontend files while you're coding

```
npm install
node_modules/watchify/bin/cmd.js -t reactify \
    src/main.js \
    -o Citizen-browserify-bundle.js
```

and watch the server 

```
sudo npm install nodemon -g
nodemon --watch server server/index.js
```
