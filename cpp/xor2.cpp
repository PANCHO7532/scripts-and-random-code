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
#include <fstream> //coming soon
#include <string>
#include <unistd.h>
#include "base64.cpp"

using namespace std;
int operationMode = 1;
string inputData = "", inputKey = "A", returnData;
string helpHeader = "xorCryptography (pipe version)\r\nCopyright (c) P7COMunications LLC 2021";
string helpContent = "Usage: ./xor [-a, --argument...]\r\n\r\n[-h, --help] Show this help\r\n[-d, --decode] Switch to decoding mode\r\n[-k, --key] Custom key for the algorithm\r\n";
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
int main(int argc, char **argv) {
	for(int c = 0; c < argc; c++) {
		if(argv[c] == string("-d") || argv[c] == string("--decode")) {
			operationMode = 2;
		}
		if(argv[c] == string("-k") || argv[c] == string("--key")) {
			inputKey = argv[c + 1];
		}
		if(argv[c] == string("-h") || argv[c] == string("--help")) {
			cout << helpHeader << endl;
			cout << helpContent;
			return 0;
		}
	}
	//start the magic
	if(isatty(fileno(stdin))) {
		//is terminal idk
		while(getline(cin, inputData)) {
			if(operationMode == 1) {
				cout << base64_encode(xorCrypto(inputData, inputKey));
			} else if(operationMode == 2) {
				cout << xorCrypto(base64_decode(inputData), inputKey);
			}
			cout << endl;
		}
	} else {
		//is not a terminal
		//anyway we need to be creative on this one
		char buffer;
		while(cin.get(buffer)) {
			//technically we can read whitespaces but no endlines
			inputData += buffer;
		}
		if(operationMode == 1) {
			cout << base64_encode(xorCrypto(inputData, inputKey));
		} else if(operationMode == 2) {
			//for some stupid reason this crashes thanks to the very last character
			try {
				cout << xorCrypto(base64_decode(inputData), inputKey);
			} catch(runtime_error exc) {
				cout << xorCrypto(base64_decode(inputData.substr(0, inputData.length()-1)), inputKey);
			}
		}
		cout << endl;
	}
	return 0;
}