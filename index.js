 // Import your auto-generated Typewriter client.
 import typewriter from './analytics/segment.js'

 // Initialize analytics-node, per the analytics-node guide above.
 import { Analytics } from '@segment/analytics-node'

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

 export const analytics = new Analytics({ writeKey: 'XH1gi3essFIrsALaAOaxmKDEuktdpAfH' })

 // Pass in your analytics-node instance to Typewriter.
 typewriter.setTypewriterOptions({
   analytics: analytics
 })

typewriter.destinationSubmitted({
  destin
})