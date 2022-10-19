#!/bin/bash
# start client
cd client 
npm run build # build the website
npm run serve # serve website so it can be accessed externally
cd ../