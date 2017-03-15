sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History,JSONModel) {
	"use strict";
	var oList = null;
	var oListitem = null;
	return Controller.extend("capu.controller.ColorMaster", {
		
		onShowDataXS : function()
		{
			var oView = this.getView();
			var oModel = new JSONModel();
				
			oList = oView.byId("colorlist");
	        oListitem = oView.byId("mainListItem");
	        	
		     	var sessionid = document.cookie;
                 var colorMaster = new SAPB1.ARGNS_COLOR();
                 colorMaster.Code = "0";
                 
                colorMaster.onActionSuccess = function(data) {
			    	oModel.setData(data.body);
			    	oList.setModel(oModel);
			    	oList.bindItems("/value", oListitem);
			    	oView.setModel(oModel);
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
                             
                SAPB1.ArgnsColorEntity.Get(colorMaster,sessionid,""); 
		},
	
	onInit: function() {
	
	
			},

	onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("colordetail", { colorId: oItem.getBindingContext("apparelmodels").getPath().substr(1) });
		},
	onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("view1", true);
			}
		}
	
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf capu.view.ColorMaster
		 */
	
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf capu.view.ColorMaster
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf capu.view.ColorMaster
		 	onAfterRendering: function() {
	sap.ui.getCore().byId("test").getBinding("apparelmodels").refresh();
	},
/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf capu.view.ColorMaster
		 */
		//	onExit: function() {
		//
		//	}
		/**
	*@memberOf capu.controller.ColorMaster
	* 
	*/

		/**
	*@memberOf capu.controller.ColorMaster
	*/

	});
});