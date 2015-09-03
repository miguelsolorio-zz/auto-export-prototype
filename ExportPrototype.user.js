// ==UserScript==
// @name         Export Prototype
// @namespace    http://azureux.azurewebsites.net/*
// @version      1.0
// @description  Tampermonkey script for exporting internal prototype tool
// @author       Miguel Solorio
// @match        http://azureux.azurewebsites.net/*
// @grant        none
// ==/UserScript==

// ==== Variables
var i = 0;
var min = 5;
var timer = min*60000;

// ==== Functions
function exportPrototype() {
    var d = new Date();
    var timestamp = d.toString();
    console.log("Exported JSON("+i+") "+ timestamp);
    i++;
    Azure.Framework.StorageController.Export();
    setTimeout(exportPrototype, timer);
}
function init(){
    setTimeout(exportPrototype, timer);
}

// ==== Event Listeners
window.addEventListener('load', init, false );