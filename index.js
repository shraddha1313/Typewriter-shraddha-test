 // Import your auto-generated Typewriter client.
 var typewriter = require('./analytics/segment.js');

 // Initialize analytics-node, per the analytics-node guide above.
 const {Analytics } = require('@segment/analytics-node')

 const analytics = new Analytics({ writeKey: 'XH1gi3essFIrsALaAOaxmKDEuktdpAfH' })

 // Pass in your analytics-node instance to Typewriter.
 typewriter.setTypewriterOptions({
   analytics: analytics
 })

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

typewriter.destinationSubmitted({
  
})
