sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("capu.controller.View1", {
		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("overview");
		},
		onPressColor: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("colormaster");
		},
		/**
	*@memberOf capu.controller.View1
	*/
onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("view1", true);
			}
		},
		/**
	*@memberOf capu.controller.View1
	*/
onPressDetail: function () {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("master");
		}
	});
});