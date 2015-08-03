var fs = require("fs"),
	request = require('request'),
	markdownpdf = require("markdown-pdf");

function download(repository, cb) {
	var readme_url = 'https://raw.githubusercontent.com/' + repository + '/master/README.md',
		pdf_name = __dirname + '/' + repository + '/readme.pdf';
	
	request.get(readme_url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        markdownpdf().from.string(body).to(pdf_name, function (error) {
	        	if(error) {
	        		cb(error);
					return;
	        	}
				cb(null, "Saved file as pdf.");
			});
	    }
	    else {
	    	cb(error);
			return;
	    }
	});
};


var readme = module.exports = function (repository, cb) {
	download(repository, cb);
};