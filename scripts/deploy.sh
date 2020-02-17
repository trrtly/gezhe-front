#!/bin/bash
TARGET_DIR=/data/webroot/product/gezhe-front

if [[ $TRAVIS_BRANCH == "master" ]];then
  TARGET_DIR=/data/webroot/test/gezhe-front
fi

rsync -r --delete-after --quiet -e "ssh -i ./deploy_key -p 22" ./dist/ ubuntu@$SSH_HOST:$TARGET_DIR
