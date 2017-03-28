# Resume
 - create one page resume
 
# TODO
- [ ] migrate to webpack 2
- [ ] now.js does not support custom domains. use openshift
- [x] use wkhtml node package to create pdf. build on server. osx has problems, does not create pagebreaks.
- [ ] add languages section
- [x] add hjson
- [x] add conferences
- [x] make more mobile friendly
- [x] update cv
- [x] add download link as pdf
- [x] add social media icons
- [x] serve from github pages
- [x] arrange file structure
- [x] uglify, concat svg, js, css
- [x] npm run commands fix
- [x] image loader fix	
- [ ] load svg as sprite, use inline svg

# configuation
- make common config to extend client and server.js

## client
- use babel-polyfill to write in es6
```javascript
module.exports = {
  entry: ["babel-polyfill", "./app/js"]
};
```

