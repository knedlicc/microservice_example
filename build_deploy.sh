#!/bin/bash
echo "***********************************************************"
echo "Welcome to Calculator Service build and deploy scripting!"
echo "***********************************************************"

read -rsp $'Press enter to continue...\n'

echo "*****************************************************"
echo "Starting Vuecalc service production build"
echo "*****************************************************"
cd vuecalc
sh build.sh
echo "*****************************************************"
echo "Starting calc1 service production build"
echo "*****************************************************"
cd ../calc1
sh build.sh
echo "*****************************************************"
echo "Starting calc2 service production build"
echo "*****************************************************"
cd ../calc2
sh build.sh
echo "*****************************************************"
echo "Starting storage service production build"
echo "*****************************************************"
cd ../storage
sh build.sh
echo "*****************************************************"
echo "Starting deployment on kubernetes cluster"
echo "*****************************************************"
cd ..
kubectl apply -f k8/
echo "*****************************************************"
echo "Deployment completed successfully!"
echo "*****************************************************"