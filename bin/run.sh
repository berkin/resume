#!/usr/bin/env bash

docker run -p 49160:8000 -v $(pwd)/src/:/usr/src/app/src/ resume
