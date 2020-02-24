import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HopdongService } from '../../../services/hopdong.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hopdong-edit',
  templateUrl: './hopdong-edit.component.html',
  styleUrls: ['./hopdong-edit.component.css']
})
export class HopdongEditComponent implements OnInit {
  public hopDongById;

  public formEditNewHopDong: FormGroup
  constructor(
    public formBuider: FormBuilder,
    public hopdongService: HopdongService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formEditNewHopDong = this.formBuider.group({
      startHopDong: ['', [Validators.required]],
      endHopDong: ['', [Validators.required]],
      electronicMoney: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      totalMoney: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })

    this.activatedRoute.params.subscribe(data => {
      this.hopDongById = data.id;
      this.hopdongService.getHopDongById(this.hopDongById).subscribe(data => {
        this.formEditNewHopDong.patchValue(data);
        console.log(data)
      })
    })
  }

  editHopDong() {
    this.hopdongService.updateHopdong(this.formEditNewHopDong.value, this.hopDongById).subscribe(data => {
      this.router.navigateByUrl("hopdong-list")
    })
  }
}
