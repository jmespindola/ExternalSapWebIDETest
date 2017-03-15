sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast,JSONModel) {
	"use strict";
	return Controller.extend("capu.controller.PanelInicial", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf capu.view.PanelInicial
		 */
		onInit: function () {
			
			var oData = {
				Modelos:{
					ModCode:"C001",
					ModName:"Remera Boca"
				}};
	
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
	
		},
		
		
		onOpenDialog : function () {
			this.getOwnerComponent().onShowGlobalDialog();
		},
		
      onCloseDialog : function () {

         this.getView().byId("helloDialog").close();
      }
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf capu.view.PanelInicial
		 */
    //	onBeforeRendering: function() {
    //
    //	},
    /**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf capu.view.PanelInicial
		 */
    //	onAfterRendering: function() {
    //
    //	},
    /**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf capu.view.PanelInicial
		 */
    //	onExit: function() {
    //
    //	}

		/**
	*@memberOf capu.controller.PanelInicial
	*/

	});
});