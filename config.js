'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://zero-admin:zero-admin@cluster0-pfvwv.mongodb.net/restaurants-app?retryWrites=true';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb+srv://zero-admin:zero-admin@cluster0-pfvwv.mongodb.net/test-restaurants-app?retryWrites=true';
exports.PORT = process.env.PORT || 8080;
