<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

   $cardQuery =  "SELECT * FROM transactions ORDER BY transaction_id";
   
   
   
   // "SELECT user, amount, status, transaction_date, payment_method, card_name, RIGHT(card_number, 4) AS card_number,card_expiry,card_cvv FROM transactions WHERE payment_method = 'Credit Card' ";

   // $momoQuery ="SELECT user, amount, status, transaction_date, payment_method, RIGHT(mobile_money, 4) AS mobile_money FROM transactions WHERE payment_method = 'Mobile Money'" ;

   $cardRes = mysqli_query($conn, $cardQuery);
 

   if (mysqli_num_rows($cardRes) > 0){
      $data = [];
      while ($row =  mysqli_fetch_assoc($cardRes)) {
         $data[] = $row;
      
}
      $response = [
         'status' => 'success',
         'data' => $data
         
     ];
  

     // Send the JSON response
     echo json_encode($response);
  
   } else {
      $response = [
         'status' => 'failed',
         'data' => 'No transactions found'
         
     ];
      

     // Send the JSON response
     echo json_encode($response);
   }


  
}


?>