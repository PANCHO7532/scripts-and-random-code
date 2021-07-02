/*
 * ----------------------------------------------------
 * xorCryptography
 * Copyright (c) PANCHO7532 - P7COMunications LLC 2021
 * -----------------------------------------------------
 * Crypts strings and coming soon, stuff, into XOR.
 * Requires base64.cpp that can be obtained here: https://github.com/ReneNyffenegger/cpp-base64
 * Made on my Android phone under Termux and in half an hour because i was bored
 * -=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=
 */
#include <iostream>
#include <string>
#include "base64.cpp"

using namespace std;
int operationMode = 1;
string inputData, inputKey = "A", returnData;
string helpHeader = "xorCryptography (pipe version)\r\nCopyright (c) P7COMunications LLC 2021";
string helpContent = "Usage:\r\n\r\n[-h, --help] - Show this help\r\n[-d, --decode] Switch to decoding mode\r\n[-k, --key] Custom key for the algorithm\r\n";
string xorCrypto(string data, string key) {
	string xorProcess = "";
	for(int dataPos = 0, keyPos = 0; dataPos < data.length(); dataPos++, keyPos++) {
		if(keyPos >= key.length()) {
			keyPos = 0;
		}
		xorProcess += data[dataPos] ^ key[keyPos];
	}
	return xorProcess;
}
int main(int argc, char *argv[]) {
	for(int c = 0; c < argc; c++) {
		if(argv[c] == "-d" || argv[c] == "--decode") {
			operationMode = 2;
		}
		if(argv[c] == "-k" || argv[c] == "--key") {
			inputKey = argv[c + 1];
		}
		if(argv[c] == "-h" || argv[c] == "--help") {
			cout << helpHeader << endl;
			cout << helpContent;
			return 0;
		}
	}
	//start the magic
	cout << "Operation mode: " << operationMode << endl;
	cout << "key val: " << inputKey << endl;
	return 0;
}