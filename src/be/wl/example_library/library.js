/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.example_library.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Demo Lib
		 *
		 * @namespace
		 * @name be.wl.example_library
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "be.wl.example_library",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"be.wl.example_library.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return be.wl.example_library;
		/* eslint-enable */

	}, /* bExport= */ false);