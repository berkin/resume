[![Build Status](https://img.shields.io/travis/berkin/resume.svg?style=flat)](https://travis-ci.org/berkin/resume)

# Resume
 - create one page resume

'' sh
./bin/build.sh
./bin/run.sh

heroku login
heroku container:login
./bin/push.sh
./bin/deploy.sh
''
 
# TODO
- [ ] is nasm needed really?
- [x] migrate to webpack 2
- [x] use heroku
- [x] use wkhtml node package to create pdf. build on server. osx has problems, does not create pagebreaks.
- [x] add languages section
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

