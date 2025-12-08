---
sidebar_position: 3
id: ssl-tls-config
title: SSL/TLS Configuration
description: Documentation for configuring SSL/TLS in the Mock Servers plugin.
keywords: [coupler, mock servers, ssl, tls, https, keystore, truststore, ca store, jks, pkcs12]
---

# SSL/TLS Configuration

To enable **SSL/TLS** in the Mock Servers plugin, you need to change the server protocol to **HTTPS**.  
Once HTTPS is selected, a new configuration tab will appear, allowing you to enable **client authentication** and manage certificate stores.

![SSL/TLS configuration screenshot](/img/docs/plugins/mock-ssl.png)

---

## Configuration Options

Within the SSL/TLS tab, you can configure the following:

- **Key Store**  
  Contains the server’s private keys and certificates used to establish secure communication.  
  Must be imported into the system beforehand (e.g., via Explorer) into a location designated for key storage.  
  Supported formats: **JKS** and **PKCS12**.

- **Trust Store**  
  Holds certificates from trusted external parties.  
  Used to verify the identity of clients or servers during SSL/TLS handshake.
  Supported formats: **JKS** and **PKCS12**.

- **CA Store**  
  Contains Certificate Authority (CA) certificates.  
  Enables validation of certificate chains and ensures that issued certificates come from trusted authorities.
  Supported formats: **JKS** and **PKCS12**.
- 
---

## Steps to Configure SSL/TLS

1. Change the server protocol from **HTTP** to **HTTPS**.
2. Open the newly available **SSL/TLS configuration tab**.
3. (Optional) Enable **client authentication** if required.
4. Import your **Key Store** into the system using Explorer.
5. Configure **Key Store**, **Trust Store**, and **CA Store** paths in the SSL/TLS tab.
6. Save the configuration — your mock server will now run securely over HTTPS.
