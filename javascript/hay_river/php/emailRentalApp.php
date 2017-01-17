<!-- http://www.html-form-guide.com/email-form/php-form-to-email.html -->
<?php

// if(!isset($_POST["submit"])) {
//   //This page should not be accessed directly. Need to submit the form.
//   echo "error; you need to submit the form!";
// }

$timestamp = date("Y-m-d H:i:s");
$person1_fullname = $_POST["person1_fullname"];
$person1_dob = $_POST["person1_dob"];
$person1_social = $_POST["person1_social"];
$person2_fullname = $_POST["person2_fullname"];
$person2_dob = $_POST["person2_dob"];
$person2_social = $_POST["person2_social"];
$person3_fullname = $_POST["person3_fullname"];
$person3_dob = $_POST["person3_dob"];
$person3_social = $_POST["person3_social"];
$person4_fullname = $_POST["person4_fullname"];
$person4_dob = $_POST["person4_dob"];
$person4_social = $_POST["person4_social"];
$person5_fullname = $_POST["person5_fullname"];
$person5_dob = $_POST["person5_dob"];
$person5_social = $_POST["person5_social"];
$Cats = $_POST["Cats"];
$Dogs = $_POST["Dogs"];
$Birds = $_POST["Birds"];
$Other = $_POST["Other"];
$pets = $_POST["pets"];
$eviction = $_POST["eviction"];
$pay_refusal = $_POST["pay_refusal"];
$applicant_current_address = $_POST["applicant_current_address"];
$applicant_phone = $_POST["applicant_phone"];
$applicant_workphone = $_POST["applicant_workphone"];
$applicant_cellphone = $_POST["applicant_cellphone"];
$applicant_current_landlord_phone = $_POST["applicant_current_landlord_phone"];
$applicant_current_address_duration = $_POST["applicant_current_address_duration"];
$applicant_current_address_rent = $_POST["applicant_current_address_rent"];
$applicant_previous_address = $_POST["applicant_previous_address"];
$applicant_previous_address_landlord = $_POST["applicant_previous_address_landlord"];
$applicant_previous_address_landlord_phone = $_POST["applicant_previous_address_landlord_phone"];
$applicant_previous_address_duration = $_POST["applicant_previous_address_duration"];
$applicant_previous_address_rent = $_POST["applicant_previous_address_rent"];
$applicant_current_employer = $_POST["applicant_current_employer"];
$applicant_employer_phone = $_POST["applicant_employer_phone"];
$applicant_supervisor = $_POST["applicant_supervisor"];
$applicant_job_position = $_POST["applicant_job_position"];
$applicant_wages = $_POST["applicant_wages"];
$applicant_income_source = $_POST["applicant_income_source"];
$applicant_employer_address = $_POST["applicant_employer_address"];
$applicant_employer_phone = $_POST["applicant_employer_phone"];
$applicant_income_duration = $_POST["applicant_income_duration"];
$applicant_payment = $_POST["applicant_payment"];
$applicant_vehicle1_description = $_POST["applicant_vehicle1_description"];
$applicant_vehicle1_plates = $_POST["applicant_vehicle1_plates"];
$applicant_vehicle1_dlnum = $_POST["applicant_vehicle1_dlnum"];
$applicant_vehicle2_description = $_POST["applicant_vehicle2_description"];
$applicant_vehicle2_plates = $_POST["applicant_vehicle2_plates"];
$applicant_vehicle2_dlnum = $_POST["applicant_vehicle2_dlnum"];
$applicant_emergency_contact1_name = $_POST["applicant_emergency_contact1_name"];
$applicant_emergency_contact1_phone = $_POST["applicant_emergency_contact1_phone"];
$applicant_emergency_contact1_addr = $_POST["applicant_emergency_contact1_addr"];
$applicant_emergency_contact1_relationship = $_POST["applicant_emergency_contact1_relationship"];
$applicant_emergency_contact2_name = $_POST["applicant_emergency_contact2_name"];
$applicant_emergency_contact2_phone = $_POST["applicant_emergency_contact2_phone"];
$applicant_emergency_contact2_addr = $_POST["applicant_emergency_contact2_addr"];
$applicant_emergency_contact2_relationship = $_POST["applicant_emergency_contact2_relationship"];
$applicant_reference1_name = $_POST["applicant_reference1_name"];
$applicant_reference1_phone = $_POST["applicant_reference1_phone"];
$applicant_reference1_addr = $_POST["applicant_reference1_addr"];
$applicant_reference2_name = $_POST["applicant_reference2_name"];
$applicant_reference2_phone = $_POST["applicant_reference2_phone"];
$applicant_reference2_addr = $_POST["applicant_reference2_addr"];
$applicant_reference3_name = $_POST["applicant_reference3_name"];
$applicant_reference3_phone = $_POST["applicant_reference3_phone"];
$applicant_reference3_addr = $_POST["applicant_reference3_addr"];

$email_from = "rentalApplicationInfoForm@rubypupil.com";
$subject = "New Tenant Info Form Submission From $person1_fullname";
$message = <<<EMAIL

You have received a new tenant submission
from applicant: $person1_fullname

RENTAL APPLICANT INFORMATION
=============================================================
Person1 Fullname: $person1_fullname
Person1 DOB: $person1_dob
Person1 Social: $person1_social

Person2 Fullname: $person2_fullname
Person2 DOB: $person2_dob
Person2 Social: $person2_social

Person3 Fullname: $person3_fullname
Person3 DOB: $person3_dob
Person3 Social: $person3_social

Person4 Fullname: $person4_fullname
Person4 DOB: $person4_dob
Person4 Social: $person4_social

Person5 Fullname: $person5_fullname
Person5 DOB: $person5_dob
Person5 Social: $person5_social

PET INFORMATION
=============================================================
Cats: $Cats
Dogs: $Dogs
Birds: $Birds
Other: $Other
Pets: $pets

EVICTION PAY REFUSAL
=============================================================
Eviction: $eviction
Pay Refusal: $pay_refusal

CURRENT CONTACT INFORMATION
=============================================================
Applicant Current Address: $applicant_current_address
Applicant Phone: $applicant_phone
Applicant Workphone: $applicant_workphone
Applicant Cellphone: $applicant_cellphone

CURRENT ADDRESS INFORMATION
=============================================================
Applicant Current Landlord Phone: $applicant_current_landlord_phone
Applicant Current Address Duration: $applicant_current_address_duration
Applicant Current Address Rent: $applicant_current_address_rent
Applicant Previous Address: $applicant_previous_address
Applicant Previous Address Landlord: $applicant_previous_address_landlord
Applicant Previous Address Landlord_phone: $applicant_previous_address_landlord_phone
Applicant Previous Address Duration: $applicant_previous_address_duration
Applicant Previous Address Rent: $applicant_previous_address_rent

CURRENT EMPLOYER
=============================================================
Applicant Current Employer: $applicant_current_employer
Applicant Employer Phone: $applicant_employer_phone
Applicant Supervisor: $applicant_supervisor
Applicant Job Position: $applicant_job_position
Applicant Wages: $applicant_wages
Applicant Income Source: $applicant_income_source
Applicant Employer Address: $applicant_employer_address
Applicant Employer Phone: $applicant_employer_phone
Applicant Income Duration: $applicant_income_duration
Applicant Payment: $applicant_payment

APPLICANT #1 VEHICLE AND LICENSE
=============================================================
Applicant Vehicle1 Description: $applicant_vehicle1_description
Applicant Vehicle1 Plates: $applicant_vehicle1_plates
Applicant Vehicle1 DL Number: $applicant_vehicle1_dlnum

APPLICANT #2 VEHICLE AND LICENSE
=============================================================
Applicant Vehicle2 Description: $applicant_vehicle2_description
Applicant Vehicle2 Plates: $applicant_vehicle2_plates
Applicant Vehicle2 DL Number: $applicant_vehicle2_dlnum


APPLICANT EMERGENCY CONTACT #1
=============================================================
Applicant Emergency Contact1 Name: $applicant_emergency_contact1_name
Applicant Emergency Contact1 Phone: $applicant_emergency_contact1_phone
Applicant Emergency Contact1 Address: $applicant_emergency_contact1_addr
Applicant Emergency Contact1 Relationship: $applicant_emergency_contact1_relationship

APPLICANT EMERGENCY CONTACT #2
=============================================================
Applicant Emergency Contact2 Name: $applicant__emergency_contact2_name
Applicant Emergency Contact2 Phone: $applicant__emergency_contact2_phone
Applicant Emergency Contact2 Address: $applicant__emergency_contact2_addr
Applicant Emergency Contact2 Relationship: $applicant__emergency_contact2_relationship

APPLICANT REFERENCE #1
=============================================================
Applicant Reference1 Name: $applicant_reference1_name
Applicant Reference1 Phone: $applicant_reference1_phone
Applicant Reference1 Address: $applicant_reference1_addr


APPLICANT REFERENCE #2
=============================================================
Applicant Reference2 Name: $applicant_reference2_name
Applicant Reference2 Phone: $applicant_reference2_phone
Applicant Reference2 Address: $applicant_reference2_addr

APPLICANT REFERENCE #3
=============================================================
Applicant Reference3 Name: $applicant_reference3_name
Applicant Reference3 Phone: $applicant_reference3_phone
Applicant Reference3 Address: $applicant_reference3_addr

Submission Date: $timestamp
EMAIL;

$to = "cdpaynes@gmail.com";
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