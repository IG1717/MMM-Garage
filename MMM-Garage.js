const MyQ = require('myq-api');

const EMAIL = email;
const PASSWORD = password;
const account = new MyQ();

Module.register("MMM-Garage", {

    // Default module config.
    defaults: {
        email: "",
        password: "",
        serialNum: "",

        modulesHidden: false, // don't change
    },

    

      notificationReceived: function (notification, payload) {
        switch (notification) {
          case 'OPEN':
            Log.log('Recieved Open Notification '
              + `to ${payload} garage of type ${typeof payload}`);

              account.login(EMAIL, PASSWORD)
                .then(function(result) {
                return account._setDeviceState('CG08501DA4EE', 'open', 'door_state')
              }).then(function (result) {
                console.log(result);
              }).catch(function (error) {
                console.error(error);
            });
            break;
          case 'CLOSE':
            Log.log('Recieved Close Notification');

            account.login(EMAIL, PASSWORD)
                .then(function(result) {
                return account._setDeviceState('CG08501DA4EE', 'open', 'door_state')
              }).then(function (result) {
                console.log(result);
              }).catch(function (error) {
                console.error(error);
            });
            break;
          default: // Do nothing
        }
      },
    }