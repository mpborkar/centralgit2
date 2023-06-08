import { LightningElement, api , track, wire } from 'lwc';
import HotelPaymentRecordFormMethod from '@salesforce/apex/HotelPaymentRecordFormClass.HotelPaymentRecordFormMethod';



export default class HotelPaymentEntryCompo extends LightningElement {

    @track vccNumber;
    @track vExpiryMonth;
    @track vExpiryYear;
    @track vcvv;
    @api vfinalcustid;
    @api vfinalhotelid;


    @track vPmtRecordID;
    @track vPmtError;

    ccNumberHandler(event)      {    this.vccNumber=event.target.value;         }
    expiryMonthHandler(event)   {    this.vExpiryMonth=event.target.value;      }
    expiryYearHandler(event)    {    this.vExpiryYear=event.target.value;       }
    cvvHandler(event)           {    this.vcvv=event.target.value;              }


    createPmtRec(){
        let pmtRec = { 
            sobjectType: "Payment_Master__c" ,
            Card_Number__c:  this.vccNumber,
            Expiry_Month__c: this.vExpiryMonth,
            Expiry_Year__c: this.vExpiryYear,
            CVV__c: this.vcvv,
            Guest_Master__c : this.vfinalcustid,
            Hotel_Master__c : "a075i000005RKAKAA4"
        }

        HotelPaymentRecordFormMethod({newPaymentRecord:pmtRec})
            .then(result => {    this.vPmtRecordID=result; 
                alert('Details have been captured');  
            })
            .catch (error => {   this.vPmtError=error;          });
    }





}