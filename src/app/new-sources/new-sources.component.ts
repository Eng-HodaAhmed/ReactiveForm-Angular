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
        'times': new FormArray([])
      }),
      'الأحد': new FormGroup({
        'times': new FormArray([])
      }),
      'الإثنين': new FormGroup({
        'times': new FormArray([])
      }),
      'الثلاثاء': new FormGroup({
        'times': new FormArray([])
      }),
      'الأربعاء': new FormGroup({
        'times': new FormArray([])
      }),
      'الخميس': new FormGroup({
        'times': new FormArray([])
      }),

      'الجمعة': new FormGroup({
        'times': new FormArray([])
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
      this.dayName(i + 1);
      const TimeformArray = (this.workingForm.get(this.day) as FormGroup).get('times') as FormArray;
      TimeformArray.clear();

    }
    else {
      this.addTime(i)
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
    const times = new FormGroup({
      'startTime': new FormControl(),
      'endTime': new FormControl()
    })
    const day = (this.workingForm.get(this.day) as FormGroup).get('times') as FormArray
    day.push(times);

  }
  delTime(i: number) {
    this.dayName(i);
    const startTimesArray = (this.workingForm.get(this.day) as FormGroup).get('startTimes') as FormArray;
    startTimesArray.removeAt(i);
    const endTimesArray = (this.workingForm.get(this.day) as FormGroup).get('endTimes') as FormArray;
    endTimesArray.removeAt(i);

  }

  getControls(i: number) {
    this.dayName(i + 1);

    const TimesArray = (this.workingForm.get(this.day) as FormGroup).get('times') as FormArray;
    return TimesArray.controls;

  }

  //display values of one day on consol
  onSave() {

    console.log(this.workingForm)


  }
}
