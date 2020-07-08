const path = require( 'path' );
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build' );
const index = path.join( publicPath, 'index.html' );

app.use( express.static( publicPath ) );

app.get( '*', ( req, res ) => {
    res.send( index );
} );

app.listen( process.env.PORT || 5000, () => {
    console.log( 'Application is running on port:'+port );
} );