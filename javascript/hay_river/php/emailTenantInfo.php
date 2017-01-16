<!-- http://www.html-form-guide.com/email-form/php-form-to-email.html -->
<?php

// if(!isset($_POST["submit"])) {
//   //This page should not be accessed directly. Need to submit the form.
//   echo "error; you need to submit the form!";
// }

$timestamp = date("Y-m-d H:i:s");
$hrmc_rental_addr = $_POST['hrmc_rental_addr'];
$hrmc_rental_unit = $_POST['hrmc_rental_unit'];
$tenant_first_name = $_POST['tenant_first_name'];
$tenant_middle_name = $_POST['tenant_middle_name'];
$tenant_last_name = $_POST['tenant_last_name'];
$tenant_dob = $_POST['tenant_dob'];
$tenant_social = $_POST['tenant_social'];
$tenant_email = $_POST['tenant_email'];
$tenant_school_major = $_POST['tenant_school_major'];
$tenant_dlnum = $_POST['tenant_dlnum'];
$tenant_vehicle_description = $_POST['tenant_vehicle_description'];
$tenant_vehicle_plate = $_POST['tenant_vehicle_plate'];
$tenant_employer = $_POST['tenant_employer'];
$tenant_employer_phone = $_POST['tenant_employer_phone'];
$vehicle1_description = $_POST['vehicle1_description'];
$vehicle1_plate = $_POST['vehicle1_plate'];
$vehicle1_dlnum = $_POST['vehicle1_dlnum'];
$vehicle2_desciption = $_POST['vehicle2_desciption'];
$vehicle2_plate = $_POST['vehicle2_plate'];
$vehicle2_dlnum = $_POST['vehicle2_dlnum'];
$emerg1_contact_name = $_POST['emerg1_contact_name'];
$emerg1_contact_phone = $_POST['emerg1_contact_phone'];
$emerg1_contact_addr = $_POST['emerg1_contact_addr'];
$emerg1_contact_relationship = $_POST['emerg1_contact_relationship'];
$emerg2_contact_name = $_POST['emerg2_contact_name'];
$emerg2_contact_phone = $_POST['emerg2_contact_phone'];
$emerg2_contact_addr = $_POST['emerg2_contact_addr'];
$emerg2_contact_relationship = $_POST['emerg2_contact_relationship'];
$submission_date = $_POST['submission_date'];

$email_from = "tenantInfoForm@rubypupil.com";
$subject = "New Tenant Info Form Submission From $tenant_first_name";
$message = <<<EMAIL

You have received a new message
from applicant: $tenant_first_name

RENTAL UNIT INFORMATION #2
=============================================================
hrmc_rental_addr: $hrmc_rental_addr
hrmc_rental_unit: $hrmc_rental_unit

TENANT INFORMATION
=============================================================
tenant_first_name: $tenant_first_name
tenant_middle_name: $tenant_middle_name
tenant_last_name: $tenant_last_name
tenant_dob: $tenant_dob
tenant_social: $tenant_social
tenant_email: $tenant_email
tenant_school_major: $tenant_school_major
tenant_dlnum: $tenant_dlnum
tenant_vehicle_description: $tenant_vehicle_description
tenant_vehicle_plate: $tenant_vehicle_plate
tenant_employer: $tenant_employer
tenant_employer_phone: $tenant_employer_phone

VEHICLE INFORMATION
=============================================================
vehicle1_description: $vehicle1_description
vehicle1_plate: $vehicle1_plate
vehicle1_dlnum: $vehicle1_dlnum
vehicle2_desciption: $vehicle2_desciption
vehicle2_plate: $vehicle2_plate
vehicle2_dlnum: $vehicle2_dlnum

EMERGENCY CONTACT #1
=============================================================
emerg1_contact_name: $emerg1_contact_name
emerg1_contact_phone: $emerg1_contact_phone
emerg1_contact_addr: $emerg1_contact_addr
emerg1_contact_relationship: $emerg1_contact_relationship

EMERGENCY CONTACT #2
=============================================================
emerg2_contact_name: $emerg2_contact_name
emerg2_contact_phone: $emerg2_contact_phone
emerg2_contact_addr: $emerg2_contact_addr
emerg2_contact_relationship: $emerg2_contact_relationship

submission_date: $timestamp
EMAIL;

$to = "cdpaynes@gmail.com, tjensen333@hotmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $tenant_email \r\n";

//Send the email
mail($to, $subject, $message, $headers);

//done. redirect to thank-you page.
flush();
echo "<script type='text/javascript'> document.location = 'http://www.rubypupil.com/hrmc/thanks.html'; </script>";

// header("Location:http://www.rubypupil.com/hrmc/thanks.html");
exit();

function IsInjected($str) {
  $injections = array('(\n+)',
         '(\r+)',
         '(\t+)',
         '(%0A+)',
         '(%0D+)',
         '(%08+)',
         '(%09+)'
         );

  $inject = join('|', $injections);
  $inject = "/$inject/i";

  if(preg_match($inject,$str)) {
    return true;
  }
  else {
    return false;
  }
}

if(IsInjected($tenant_email)) {
  echo "Bad email value!";
  exit;
}

?>