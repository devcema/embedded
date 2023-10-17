<?php
header("Access-Control-Allow-Origin: *");


header("Content-Type: application/json");

// Allow requests from any origin

// Allow the following HTTP methods in preflight requests
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Allow these headers to be included in the actual request
header("Access-Control-Allow-Headers: Content-Type");

require_once 'db.php';
require_once 'paymentGateway.php';
include 'get.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the POST data
    $postData = json_decode(file_get_contents('php://input'));

    // var_dump($postData);
    
    // Check if the 'data' field is provided in the POST data
    if (isset($postData->paymentMethod)) {

      if($postData->paymentMethod === 'Credit Card'){


         $paymentMethod = $postData->paymentMethod;
         $user = filter_var($postData->user, FILTER_VALIDATE_EMAIL);
         $cardName = trim(strip_tags($postData->cardName));
         $cardNumber = filter_var($postData->cardNumber, FILTER_VALIDATE_INT);
         $cardExpiry = trim(strip_tags($postData->cardExpiry));
         $cardCvv = filter_var($postData->cardCvv, FILTER_VALIDATE_INT); 
         $price = filter_var($postData->price, FILTER_VALIDATE_FLOAT); 

         $status = simulatePaymentGateway($price)['status'];
        //  var_dump($status);
         
         $query = "INSERT INTO transactions(payment_method, user, card_name, card_number, card_expiry, card_cvv, amount, status) VALUES ('$paymentMethod', '$user', '$cardName', '$cardNumber', '$cardExpiry', '$cardCvv', '$price', '$status')";

         $data =  mysqli_query($conn, $query);
       
         if($data === 'false'){
            $response = [
                'status' => 'failed',
                'message' => 'failed to process transaction',
                
            ];
            echo json_encode($response);
        } else {

            $response = [
                'status' => 'success',
                'message' => 'Credit Card payment received and processed successfully'
                
            ];
    
            echo json_encode($response);
        }
          
      } elseif($postData->paymentMethod === 'Mobile Money'){
        // var_dump($postData);
        //Handle mobile money payment
         $paymentMethod = $postData->paymentMethod;
         $user = filter_var($postData->user, FILTER_VALIDATE_EMAIL);
         $momoNumber = filter_var($postData->momoNumber, FILTER_VALIDATE_INT); 
         $price = filter_var($postData->price, FILTER_VALIDATE_FLOAT); 
         $momoProvider = trim(strip_tags($postData->momo_provider));

         $status = simulatePaymentGateway($price)['status'];

         $query = "INSERT INTO transactions(payment_method, user, mobile_money, amount, status, momo_provider) VALUES ('$paymentMethod', '$user', '$momoNumber', '$price', '$status', '$momoProvider')";

         
        $data =  mysqli_query($conn, $query);

        if($data === 'false'){
            $response =array(
                "status" => "error",
                "message" => "Failed to process transaction.",
            );
            echo json_encode($response);
        } else {

            $response =array(
                "status" => "success",
                "message" => "Mobile Money payment received and processed successfully.",
            );
            // Send the JSON response
            echo json_encode($response);

        }
      };

    } else {
        // Invalid request, 'data' field not provided
        $response =array(
            "status" => "error",
            "message" => "Select a valid payment method.",
        );
        echo json_encode($response);
    }
}

?>





