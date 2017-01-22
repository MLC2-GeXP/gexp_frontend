import {Component, OnChanges, SimpleChanges, Input, Output, EventEmitter} from "@angular/core";
/**
 * Created by calin.crist on 14/01/2017.
 */

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 90/5;
    }

    onClick() {
        //  backtick
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}