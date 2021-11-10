sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function(Spiderman) {
	'use strict';
	//extend means we are inheriting from parent module
	return Spiderman.extend("mkt56.controller.Main", {
		//since its a module (class), we have constructor of this class
		//as onInit which gets called by framework when object of this class is
		//created
		onInit: function() {
			//alert("Controller object is now created");
		},
		onClick: function() {
			alert(this.getView().byId("myField").getValue());
		},
		onLogin: function() {
			var sUser = sap.ui.getCore().byId("idUser").getValue();
			var sPassword = sap.ui.getCore().byId("idPassword").getValue();
			if (sUser === sPassword) {
				alert("Login success!");
			} else {
				alert("Login Failed!");
			}
		},
		myFunction: function() {
			//Step 1: Get The Runtime object of our UI5 application
			var oCore = sap.ui.getCore();
			//Step 2: Get the object of the Input field
			var oInp = oCore.byId("idInp");
			//Step 3: Get the value property (getValue method)
			var sVal = oInp.getValue();

			oCore.byId("idBtn").setVisible(false);

			alert("welcome " + sVal);
		}
	});
});

