sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History",
		"sap/m/MessageToast",
			"sap/ui/model/json/JSONModel"
], function(Controller,History,MessageToast,JSONModel) {
	"use strict";
	
	return Controller.extend("capu.controller.ColorDetail", {
		
		onInit: function () {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("colordetail").attachPatternMatched(this._onObjectMatched, this);
			//alert(document.cookie);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").colorId,
				model: "apparelmodels"
			});
		},	
		
		
			onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("colormaster", true);
			}
		},
		onSaveColor: function()
		{
		
	         	var test = this.getView().getModel("apparelmodels");
		     	var sessionid = document.cookie;
				var oView = this.getView();
                 var colorMaster = new SAPB1.ARGNS_COLOR();
                 
                 colorMaster.Code = oView.byId("txtCode").getValue();
                 colorMaster.U_ColDesc = oView.byId("txtDesc").getValue(); 

                colorMaster.onActionSuccess = function(data) {
                	
                    MessageToast.show("Se Guardo Correctamente");  
                    //sap.ui.getCore().getModel("apparelmodels").refresh();
                    test.refresh(true);
                    //test.updateBindings();

                };
        
                colorMaster.onActionError = function(response) {
                
                    var resp = JSON.parse(response.responseText);
                    if (resp && resp.body && resp.body.error && resp.body.error.message && resp.body.error.message.value)
                    {
                        MessageToast.show("Status: " + response.status + "\nB1 Msg: " + resp.body.error.message.value);
                    }
                    else if (resp && resp.body)
                    {
                        MessageToast.show("Status: " + response.status + "\nBody: " + resp.body);
                    }
                    else
                    {
                        MessageToast.show("Status: " + response.status + "\nText: " + resp);  
                    }
                };
                             
                SAPB1.ArgnsColorEntity.Update(colorMaster,sessionid,"");       
                
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf capu.view.ColorDetail
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf capu.view.ColorDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf capu.view.ColorDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf capu.view.ColorDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});