const fs = require('fs');
const path = require('path');

// Paths
const googleServicesBase = '../configurations/google-services.json';
const googleServicesCap = 'android/capacitor-cordova-android-plugins/google-services.json';

// Check if the destination directory exists
const dir = path.dirname(googleServicesCap);

// If the directory does not exist, log an error
if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
} else {
    // Proceed with copying the file if the directory exists
    fs.copyFile(googleServicesBase, googleServicesCap, (err) => {
        if (err) {
            console.error('Error copying file:', err);
        } else {
            console.log('google-services.json copied successfully.');
        }
    });
}
