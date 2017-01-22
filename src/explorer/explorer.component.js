"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by calin.crist on 15/01/2017.
 */
var url = 'app/explorer/loadCharts.js';
var ExplorerComponent = ExplorerComponent_1 = (function () {
    function ExplorerComponent() {
        this.pageTitle = 'Data Explorer';
    }
    ExplorerComponent.prototype.ngOnInit = function () {
        ExplorerComponent_1.loadScript(url);
    };
    ExplorerComponent.loadScript = function (url) {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
        console.log('loaded');
    };
    return ExplorerComponent;
}());
ExplorerComponent = ExplorerComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'explorer.component.html',
        styleUrls: ['explorer.component.css']
    })
], ExplorerComponent);
exports.ExplorerComponent = ExplorerComponent;
var ExplorerComponent_1;
//# sourceMappingURL=explorer.component.js.map