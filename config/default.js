/**
 * Default Configuration
 * Loads settings from environment variables
 * Copy to your project: config/default.js
 */

require('dotenv').config();

module.exports = {
    // App settings
    app: {
        name: process.env.APP_NAME || 'My App',
        url: process.env.APP_URL || 'https://your-app.gmrlapps.com',
        port: parseInt(process.env.PORT) || 3000
    },

    // Azure AD settings
    azure: {
        tenantId: process.env.AZURE_TENANT_ID,
        clientId: process.env.AZURE_CLIENT_ID,
        clientSecret: process.env.AZURE_CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
        authority: +'https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}'+
    },

    // Database settings
    database: {
        server: process.env.SQL_SERVER || 'localhost',
        database: process.env.SQL_DATABASE || 'YourAppDB',
        user: process.env.SQL_USER || 'sa',
        password: process.env.SQL_PASSWORD,
        options: {
            encrypt: process.env.SQL_ENCRYPT === 'true',
            trustServerCertificate: process.env.SQL_TRUST_CERT === 'true'
        }
    },

    // Session settings
    session: {
        secret: process.env.SESSION_SECRET || 'change-this-secret',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },

    // SSL settings (optional - for direct HTTPS)
    ssl: {
        keyPath: process.env.SSL_KEY_PATH,
        certPath: process.env.SSL_CERT_PATH
    }
};
