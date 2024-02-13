import { Component, OnInit } from '@angular/core';
import { WorkingTime } from '../models/workingTime.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-sources',
  templateUrl: './new-sources.component.html',
  styleUrls: ['./new-sources.component.css']
})
export class NewSourcesComponent implements OnInit {

  active: boolean = true;
  name: string;
  orderTime: string = ""

  availableNum: number = 1;
  availablePeriod: string = "أسبوع";
  // availableTime:string=this.availableNum+''+this.availablePeriod;

  supplyTime: string = ""
  constantTime: number = 1;

  NumOfOrders: string = ""
  bookerNumber: number = 1;
  imageUrl: string = 'assets/user.png';
  time: number = 1;


  workingForm: FormGroup;
  workingTime: WorkingTime[] = [
    { dayName: 'السبت', isToggled: false },
    { dayName: 'الأحد', isToggled: false },
    { dayName: 'الإثنين', isToggled: false },
    { dayName: 'الثلاثاء', isToggled: false },
    { dayName: 'الأربعاء', isToggled: false },
    { dayName: 'الخميس', isToggled: false },
    { dayName: 'الجمعة', isToggled: false }
  ]


  isToggled: boolean;
  constantTimeFlag: boolean = false;
  orderFlag: boolean = false;
  addFlag: boolean = false;

  day: string;

  ngOnInit(): void {
  

    this.workingForm = new FormGroup({
      
      'السبت': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),
      'الأحد': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),
      'الإثنين': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),
      'الثلاثاء': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),
      'الأربعاء': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),
      'الخميس': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),

      'الجمعة': new FormGroup({
        'basicStartTime': new FormControl(new Date()),
        'basicEndTime': new FormControl(new Date()),
        'startTimes': new FormArray([]),
        'endTimes': new FormArray([])
      }),


    })
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];

    this.imageUrl = URL.createObjectURL(file);

  }

  onToggleChange(i) {

    this.workingTime[i].isToggled = !this.workingTime[i].isToggled;

    if (this.workingTime[i].isToggled == false) {
      const startTimeformArray = (this.workingForm.get(this.day) as FormGroup).get('startTimes') as FormArray;
      startTimeformArray.clear();

      const endTimeformArray = (this.workingForm.get(this.day) as FormGroup).get('endTimes') as FormArray;
      endTimeformArray.clear();
    }
  }

  dayName(i) {
    switch (i) {
      case 1:
        this.day = 'السبت'
        break;
      case 2:
        this.day = 'الأحد'
        break;

      case 3:
        this.day = 'الإثنين'
        break;
      case 4:
        this.day = 'الثلاثاء'
        break;
      case 5:
        this.day = 'الأربعاء'
        break;
      case 6:
        this.day = 'الخميس'
        break;
      case 7:
        this.day = 'الجمعة'
        break;
    }
  }
  addTime(i: number) {

    this.dayName(i + 1);
    
    const startControl = new FormControl(null);
    const endControl = new FormControl(null);
 
    const startTimeformArray = (this.workingForm.get(this.day) as FormGroup).get('startTimes') as FormArray;
    startTimeformArray.push(startControl);
 
    const endTimeformArray = (this.workingForm.get(this.day) as FormGroup).get('endTimes') as FormArray;
    endTimeformArray.push(endControl);


  }
  delTime(i: number) {
    this.dayName(i);
    const startTimesArray = (this.workingForm.get(this.day) as FormGroup).get('startTimes') as FormArray;
    startTimesArray.removeAt(i);
    const endTimesArray = (this.workingForm.get(this.day) as FormGroup).get('endTimes') as FormArray;
    endTimesArray.removeAt(i);

  }

  getControls(i: number, arrayName: string) {
    this.dayName(i + 1);

    const TimesArray = (this.workingForm.get(this.day) as FormGroup).get(arrayName) as FormArray;
    return TimesArray.controls;

  }

  //display values of one day on consol
  onSave() {
    const saturdayBasicStartTime = this.workingForm.get('السبت.basicStartTime').value;
    const saturdayBasicEndTime = this.workingForm.get('السبت.basicEndTime').value;


    const saturdayStartTimes = this.workingForm.get('السبت.startTimes').value;
    const saturdayEndTimes = this.workingForm.get('السبت.endTimes').value;

    console.log(saturdayBasicStartTime, saturdayBasicEndTime);
    console.log(saturdayStartTimes, saturdayEndTimes);
  }
}
