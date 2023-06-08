import { LightningElement , api, track, wire} from 'lwc';
import HotelGuestRecordFormMethod from '@salesforce/apex/HotelGuestRecordFormClass.HotelGuestRecordFormMethod';



export default class HotelGuestEntryCompo extends LightningElement {
   
    @track vFirstName;
    @track vLastName;
    @track vPhone;
    @track vEmail;
    @track vAdult;
    @track vChildren;
    @track vCity;
    @track vStarType;
    @track vCheckIn;
    @track vCheckOut;
    @track vGuestRecordID;
    @track vError;

    get options() {
        return [
            { label: '3 Star', value: '3 Star' },
            { label: '5 Star', value: '5 Star' }  
        ];
    }

    firstNameHandler(event) {    
        this.vFirstName=event.target.value; 
        let searchCmp=this.template.querySelector(".nameCmp");  
        if(!this.vFirstName){ searchCmp.setCustomValidity("Name value is required"); }
        else {searchCmp.setCustomValidity("");} // Clear previous value
        searchCmp.reportValidity();                
        }
    lastNameHandler(event)  {    this.vLastName=event.target.value;     }
    phoneHandler(event)     {    this.vPhone=event.target.value;        }
    emailHandler(event)     {    this.vEmail=event.target.value;        }
    adultHandler(event)     {    this.vAdult=event.target.value;        }
    childrenHandler(event)  {    this.vChildren=event.target.value;     }
    cityHandler(event)      {    this.vCity=event.target.value;         }
    starTypeHandler(event)  {    this.vStarType=event.target.value;     }
    checkInHandler(event)   {    this.vCheckIn=event.target.value;      }
    checkOutHandler(event)  {    this.vCheckOut=event.detail.value;     }
    
    // Handling action once submit button is pressed
    createGuestRec(){
        let guestRec = { 
            sobjectType: "Guest_Master__c" ,
            Guest_First_Name__c : this.vFirstName ,
            Guest_Last_Name__c : this.vLastName,
            Guest_Phone__c : this.vPhone,
            Guest_Email__c : this.vEmail,
            Number_of_Adults__c : this.vAdult,
            Number_of_Children__c : this.vChildren,
            City_of_Hotel__c : this.vCity,
            Preferred_Hotel_Type__c : this.vStarType,
            Check_In_Date__c : this.vCheckIn,
            Check_Out_Date__c : this.vCheckOut
        }   

        // Calling Apex function and passing guestRec record to it
        HotelGuestRecordFormMethod({newGuestRecord:guestRec})
            .then(result => {   this.vGuestRecordID=result; })
            .catch (error=> {   this.vError=error;          });
    }


    resetFormValues(){
        this.vFirstName="";
        this.vLastName="";
        this.vPhone="";      
        this.vEmail="";      
        this.vAdult="";       
        this.vChildren="";  
        this.vCity="";     
        this.vStarType="";     
        this.vCheckIn="";    
        this.vCheckOut="";
    }


    
}