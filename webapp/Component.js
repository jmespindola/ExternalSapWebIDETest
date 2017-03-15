sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"capu/model/models",
	"capu/controller/GlobalFragment",
	"sap/ui/model/json/JSONModel"

], function(UIComponent, Device, models,GlobalFragment,JSONModel) {
	"use strict";

	return UIComponent.extend("capu.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
		
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);


				// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
			jQuery.sap.registerResourcePath("SAPServiceLayer", "/ArgentisoDtaServices/webidetest/js/SAPServiceLayer");
			jQuery.sap.require("SAPServiceLayer");

			// set the device model
		//	this.setModel(models.createDeviceModel(), "device");
			
			this._helloDialog = new GlobalFragment(this.getAggregation("rootControl"),this);
			this.getRouter().initialize();
			
		},
		
		onShowGlobalDialog: function()
		{
			this._helloDialog.open();
		},
				destroy : function () {
				this.oListSelector.destroy();
				this._oErrorHandler.destroy();
				// call the base component's destroy function
				UIComponent.prototype.destroy.apply(this, arguments);
			}

			/**
			 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
			 * design mode class should be set, which influences the size appearance of some controls.
			 * @public
			 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
			 */
			// getContentDensityClass : function() {
			// 	if (this._sContentDensityClass === undefined) {
			// 		// check whether FLP has already set the content density class; do nothing in this case
			// 		if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
			// 			this._sContentDensityClass = "";
			// 		} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
			// 			this._sContentDensityClass = "sapUiSizeCompact";
			// 		} else {
			// 			// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
			// 			this._sContentDensityClass = "sapUiSizeCozy";
			// 		}
			// 	}
			// 	return this._sContentDensityClass;
			// }
		
		
		
	});
});