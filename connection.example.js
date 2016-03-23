// Edit this file and rename as `connection.js`

var join = require('path').join
var rfs = require('fs').readFileSync
var amqp = require('amqplib/callback_api')

var opts = {
  cert: rfs(join(__dirname, './certs/server.crt')),
  key: rfs(join(__dirname, './certs/server.key')),
  passphrase: 'SomePassphrase',
  ca: [rfs(join(__dirname, './certs/compose.crt'))]
}

module.exports = function (cb) {
  amqp.connect('amqps://super_user:SomePassword@aws-us-east-1-portal.11.dblayer.com:27278/fancy-rabbitmq-80',  // Your connection URL
    opts, function(err, conn, self) {
      if (err) {
        throw new Error(err)
      }
      
      cb(conn)
  })
}
