const fs = require('fs');
const path = require('path');

// =================================google-services.json=================================================== //
if (process.argv[2] === 'android') {
	const googleServicesBase = 'configurations/google-services.json';
	const googleServicesCap = ['android/app/google-services.json', 'android/capacitor-cordova-android-plugins/google-services.json'];
  
    // google-service fix
    googleServicesCap.forEach(capService => {
        fs.copyFile(googleServicesBase, capService, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });

    // Printing the contents of the configurations folder
    const configurationsDir = 'configurations';
    
    fs.readdir(configurationsDir, (err, files) => {
        if (err) {
            console.error('Error reading configurations directory:', err);
        } else {
            console.log('Contents of configurations folder:', files);
        }
    });
}
