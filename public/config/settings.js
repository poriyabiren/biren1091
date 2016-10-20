/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation 
 *******************************************************************************/

var config = {
	iot_deviceType: "iotphone",     // replace with your deviceType
	iot_deviceOrg: "ytuc3p",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "PAT10001", token: "3grk)(38X3T9tU91@y" },
		{ deviceId: "PAT10002", token: "5TgQa!*xMn5g@Rcf9X" },
		{ deviceId: "PAT10003", token: "VQswf!GeV01wkgyjVe" }
	],
	iot_apiKey: "a-ytuc3p-6w4z5cyomy",    // replace with the key for a generated API token
	iot_apiToken: "s3iUpO2i@L&6xvrhTC",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
