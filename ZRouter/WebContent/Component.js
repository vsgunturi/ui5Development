sap.ui.core.UIComponent.extend("gvsRouter.Component", {

	metadata : {
		manifest : "json" // Indicating the format of Manifest file.
	},
	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}

});