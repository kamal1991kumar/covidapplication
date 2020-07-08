const path = require( 'path' );
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const publicPath = path.join(__dirname, '..', 'build' );
const index = path.join( publicPath, 'index.html' );

app.use( express.static( publicPath ) );

app.get( '*', ( req, res ) => {
    res.send( index );
} );

app.listen( port, () => {
    console.log( 'Application is running on port:'+port );
} );