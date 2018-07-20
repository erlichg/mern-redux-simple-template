const db = "mydb";
const config = {
    db,
    mongoURL: process.env.MONGO_URL || `mongodb://localhost:27017/${db}`,
    // Authentication
    auth: {
        ldapUrl: "ldap://example.com:3268",
        baseDN: "dc=example,dc=com"
    }
};

module.exports = config;
