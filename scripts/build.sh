#!/usr/bin/env bash

set -ev

SCRIPT_DIR=$(dirname "$0")

if [[ -z "$REGISTRY_SERVER" ]] ; then
  echo "Cannot find REGISTRY_SERVER env var"
  exit 1
fi

if [[ -z "$GROUP" ]] ; then
  echo "Cannot find GROUP env var"
  exit 1
fi

if [[ -z "$COMMIT" ]] ; then
  echo "Cannot find COMMIT env var"
  exit 1
fi

if [[ "$(uname)" == "Darwin" ]]; then
  DOCKER_CMD=docker
else
  DOCKER_CMD="sudo docker"
fi

CODE_DIR=$(cd $SCRIPT_DIR/..; pwd)
echo $CODE_DIR

REPO=${REGISTRY_SERVER}/${GROUP}/$(basename front-end);

$DOCKER_CMD build -t ${REPO}:${COMMIT} .
