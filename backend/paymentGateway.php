<?php

// Simulate payment gateway response

function simulatePaymentGateway($price)
{
   $rand = rand(0, 2);
   if ($rand === 0) {
      return ['status' => 'success'];
   } else if($rand === 1) {
      return ['status' => 'pending'];
   } else {
      return ['status' => 'failure', 'error' => 'Payment failed'];
   }
}

// Generate payment id

function generateTransactionID()
{
   return uniqid('txid_', true);
}


