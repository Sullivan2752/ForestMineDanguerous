paypal.HostedButtons({
  hostedButtonId: "YZCME27TECFBY",
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '5.00' // Le prix du jeu
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Déclencher le téléchargement du fichier
      document.getElementById('download-link').click();
    });
  }
}).render("#paypal-container-YZCME27TECFBY");