import { LightningElement, api, wire, track } from 'lwc';
import HotelHotelListMethod  from '@salesforce/apex/HotelHotelListClass.HotelHotelListMethod';


export default class HotelHotelListCompo extends LightningElement {
    @api vcustomerid;
    @api vhotelcity;
    @api vhoteltype;   
    
    @track selectedrows;      
    @track compocheck;

@wire ( HotelHotelListMethod , {vhotelcity: '$vhotelcity' , vhoteltype:'$vhoteltype'})       
     vHotelList;
      
    hotelcolumns  = [
        
        {label: 'Hotel Name' , fieldName: 'Hotel_Name__c' },
        {label: 'Hotel City', fieldName: 'Hotel_City__c'},
        {label: 'Hotel Type', fieldName: 'Hotel_Type__c'    },
        ];

        handleRowAction(event){
            this.selectedrows = event.target.selectedRows;
          //  var selectedRowdata = event.detail.selectedRows;
           // var selectedData = this.template.querySelector('lightning-datatable').getSelectedRows();            
            // console.log('selectedRows  ' + selectedRows +' & '+selectedRows[0].Id+' & '+selectedRows[0] );
             console.log('selectedRows  ' + this.selectedrows);                      


        }
        selectfinalhotel(){           
            if (this.selectedrows)  { this.compocheck=true; }
            else                    {this.compocheck=false;}

            // console.log(this.template.querySelector('lightning-datatable'));
            //var selectedRecord =  this.template.querySelector('lightning-datatable').getSelectedRows();
            //console.log(selectedRecord);
            // alert('Selected record is ' + selectedRecord);
            // alert('Selected record ID is ' + selectedRecord.Id);

        }

}