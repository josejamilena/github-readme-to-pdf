# github-readme-to-pdf
> Convert github `readme.md` to PDF and save in local

## Install

```
$ npm install --save github-readme-to-pdf
```


## Usage

```js
var readme = require('github-readme-to-pdf');

readme("jaysingh/freem", function (error, done) {
  console.log(error || done);
})
```


## API

### readme(callback)

Save the `readme.md` of specified github repository to current directory in pdf format.

#### callback(error, done)

*Required*  
Type: `function`

##### done

Saved file as pdf.

## License

MIT © [Jayram Singh](http://github.com/jaysingh)