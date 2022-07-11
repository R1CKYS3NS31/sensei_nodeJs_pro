## How to get a basic HTTPS web server up and
running!
Once you have node.js installed on your system, you can just follow the procedure below to get a basic web server
running with support for both HTTP and HTTPS!
### Step 1 : Build a Certificate Authority
1. create the folder where you want to store your key & certificate :
```
mkdir conf
```
1. go to that directory :
```
cd conf
```
1. grab this ca.cnf file to use as a configuration shortcut :
```
wget https://raw.githubusercontent.com/anders94/https-authorized-clients/master/keys/ca.cnf
```
GoalKicker.com – Node.js Notes for Professionals
1.   create a new certificate authority using this configuration :
```
openssl req -new -x509 -days 9999 -config ca.cnf -keyout ca-key.pem -out ca-cert.pem
```
1. now that we have our certificate authority in ca-key.pem and ca-cert.pem , let's generate a private key for
the server :
```
openssl genrsa -out key.pem 4096
```
6. grab this server.cnf file to use as a configuration shortcut :
```
wget https://raw.githubusercontent.com/anders94/https-authorized-clients/master/keys/server.cnf
```
7. generate the certificate signing request using this configuration :
```
openssl req -new -config server.cnf -key key.pem -out csr.pem
```
8. sign the request :
```
openssl x509 -req -extfile server.cnf -days 999 -passin "pass:password" -in csr.pem -CA ca-
cert.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem
```
### Step 2 : Install your certificate as a root certificate
1. copy your certificate to your root certificates' folder :
```
sudo cp ca-crt.pem /usr/local/share/ca-certificates/ca-crt.pem
```
2. update CA store :
```
sudo update-ca-certificates
```
### Step 3 : Starting your node server
GoalKicker.com – Node.js Notes for Professionals
17First, you want to create a server.js file that contains your actual server code.