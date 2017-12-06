import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
	showSecret = false;
	buttonLog = [1,2,3,4,5];
  constructor() {

   }

  ngOnInit() {
  }

  onButtonToggle(){
  	if(this.showSecret == false){
  		this.showSecret = true;
  	}else {
  		this.showSecret = false;
  	}
  	this.buttonLog.push(this.buttonLog.length +1);
  	console.log(this.buttonLog);

  	
	}


}
