import { Component } from "@angular/core";
import { RoutingService } from "src/app/services/routing.service";


@Component({
    selector: 'no-data',
    templateUrl: './no-data.component.html',
    styleUrls: ['../../device/device-grid/device-grid.component.css']
})
export class NoDataComponent{

    constructor(private routing:RoutingService){}

    navigate(){
        this.routing.navigate('/newdevice')
    }

    pendingSelected():boolean{
        console.log(this.routing.getSelected() == "/pending")
        return (this.routing.getSelected() == "/pending")
    }
    

}