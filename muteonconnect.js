import xapi from 'xapi';

// Function to handle the call connected event
function onCallConnected(event) {
    if (event.type === 'Connected') {
        // Mute the device
        muteDevice();
    }
}

// Function to mute the device
function muteDevice() {
    /* Send the command to mute the microphone
    const command = {
        "command": "setMicrophoneMute",
        "mute": true
    };*/

    // Send the command using XAPI
    xapi.command('Audio Microphone Mute', true)
        .then(() => {
            console.log('Device muted successfully.');
        })
        .catch((error) => {
            console.error('Error muting device:', error);
        });
}

// Event listener for call events
xapi.event.on('Call Status', onCallConnected);
