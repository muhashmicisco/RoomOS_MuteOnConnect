import xapi from 'xapi';

xapi.Event.CallSuccessful.on(() => {
   xapi.Command.Audio.Microphones.Mute();
   xapi.Command.Video.Input.MainVideo.Mute();
});
